import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { Car, EngineStatusResponse } from "../models/garage.interfaces";
import { Winner } from "../models/winners.interfaces";
import { createWinner, updateWinner } from "../store/winners/winners.actions";
import { GarageService } from "./garage-service.service";
import { WinnersService } from "./winners-service.service";

@Injectable({
    providedIn: "root",
})
export class MoveService {
    private engineStartSubscription?: Subscription;
    private engineModeSwitchSubscription?: Subscription;
    private isFirstCarArrived: boolean = false;
    private saveAsWinner: boolean = false;

    constructor(
        private service: GarageService,
        private winnersService: WinnersService,
        private store: Store,
    ) {}

    startMoving(car: Car) {
        this.saveAsWinner = false;
        this.startEngine(car).then(() => {
            setTimeout(() => {
                this.resetMoving(car);
            }, 2000);
        });
    }

    startEngine(car: Car) {
        return new Promise<void>((resolve) => {
            if (car.id) {
                this.engineStartSubscription = this.service
                    .startStopEngine(car.id, "started")
                    .subscribe((res: EngineStatusResponse) => {
                        if (res && car.id) {
                            const animationTimeInSeconds = this.getCarSpeed(res);
                            this.animateCar(animationTimeInSeconds, car);
                            this.switchEngineToDriveMode(car, animationTimeInSeconds, this.saveAsWinner);
                            setTimeout(() => {
                                resolve();
                            }, animationTimeInSeconds * 1000);
                        }
                    });
            }
        });
    }

    switchEngineToDriveMode(car: Car, animationTimeInSeconds: number, callHandleFirstCarArrival: boolean) {
        if (car.id) {
            this.engineModeSwitchSubscription = this.service.switchEngineToDriveMode(car.id).subscribe(
                () => {
                    if (callHandleFirstCarArrival) {
                        this.handleFirstCarArrival(car, animationTimeInSeconds);
                    }
                },
                (error) => {
                    if (error.status === 500) {
                        this.pauseMoving(car);
                    }
                },
            );
        }
    }

    handleFirstCarArrival(car: Car, animationTimeInSeconds: number) {
        if (!this.isFirstCarArrived) {
            if (car.id) {
                this.winnersService.getWinner(car.id).subscribe(
                    (winner) => {
                        const newWinner = {
                            wins: winner.wins + 1,
                            time: animationTimeInSeconds,
                        };
                        this.store.dispatch(updateWinner({ winnerID: winner.id, winnerData: newWinner }));
                    },
                    () => {
                        if (car.id) {
                            const newWinner: Winner = {
                                id: car.id,
                                wins: 1,
                                time: animationTimeInSeconds,
                            };
                            this.store.dispatch(createWinner({ winner: newWinner }));
                        }
                    },
                );

                this.isFirstCarArrived = true;
            }
        }
    }

    startRace(cars: Car[]) {
        this.saveAsWinner = true;
        const promises = cars.map((car) => this.startEngine(car));
        Promise.all(promises).then(() => {
            setTimeout(() => {
                this.resetMovingForAll(cars);
            }, 2000);
        });
    }

    resetMovingForAll(cars: Car[]) {
        cars.forEach((car) => this.resetMoving(car));
    }

    resetMoving(car: Car) {
        this.cancelSubscriptions();
        if (car.id) {
            this.service.startStopEngine(car.id, "stopped").subscribe((res: EngineStatusResponse) => {
                if (res) {
                    const carElement = this.getCarElement(car);
                    if (carElement) {
                        carElement.classList.remove("moving");
                    }
                }
            });
        }
        this.isFirstCarArrived = false;
    }

    animateCar(animationTimeInSeconds: number, car: Car) {
        const carElement = this.getCarElement(car);
        if (carElement) {
            carElement.style.animationDuration = `${animationTimeInSeconds}s`;
            carElement.classList.add("moving");
        }
    }

    getCarElement(car: Car) {
        return document.getElementById(`${car.id}`);
    }

    getCarSpeed(data: EngineStatusResponse) {
        return Math.floor((data.distance / data.velocity / 1000) * 100) / 100;
    }

    pauseMoving(car: Car) {
        const carElement = this.getCarElement(car);
        if (carElement) {
            carElement.style.animationPlayState = "paused";
        }
    }

    private cancelSubscriptions() {
        if (this.engineStartSubscription) {
            this.engineStartSubscription.unsubscribe();
            this.engineStartSubscription = undefined;
        }
        if (this.engineModeSwitchSubscription) {
            this.engineModeSwitchSubscription.unsubscribe();
            this.engineModeSwitchSubscription = undefined;
        }
    }
}
