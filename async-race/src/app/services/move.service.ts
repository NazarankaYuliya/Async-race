import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { Car, EngineStatusResponse } from "../models/garage.interfaces";
import { Winner } from "../models/winners.interfaces";
import { createWinner } from "../store/winners/winners.actions";
import { GarageService } from "./garage-service.service";

@Injectable({
    providedIn: "root",
})
export class MoveService {
    private engineStartSubscription?: Subscription;
    private engineModeSwitchSubscription?: Subscription;
    private isFirstCarArrived: boolean = false;

    constructor(
        private service: GarageService,
        private store: Store,
    ) {}

    startMoving(car: Car) {
        if (car.id) {
            this.engineStartSubscription = this.service
                .startStopEngine(car.id, "started")
                .subscribe((res: EngineStatusResponse) => {
                    if (res && car.id) {
                        const animationTimeInSeconds = this.getCarSpeed(res);
                        this.animateCar(animationTimeInSeconds, car);

                        this.engineModeSwitchSubscription = this.service.switchEngineToDriveMode(car.id).subscribe(
                            () => {
                                if (!this.isFirstCarArrived) {
                                    if (car.id) {
                                        const newWinner: Winner = {
                                            id: car.id,
                                            wins: 1,
                                            time: animationTimeInSeconds,
                                        };
                                        this.store.dispatch(createWinner({ winner: newWinner }));
                                    }
                                    this.isFirstCarArrived = true;
                                }
                            },
                            (error) => {
                                if (error.status === 500) {
                                    this.pauseMoving(car);
                                }
                            },
                        );
                    }
                });
        }
    }

    startRace(cars: Car[]) {
        cars.forEach((car) => this.startMoving(car));
    }

    stopMoving(car: Car) {
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

            // carElement.addEventListener(
            //     "animationend",
            //     () => {
            //         //this.finishedCars.push({ car: car, time: animationTimeInSeconds });
            //         if (car.id) {
            //             let newWinner: Winner = {
            //                 id: car.id,
            //                 wins: 1,
            //                 time: animationTimeInSeconds,
            //             };
            //             this.store.dispatch(createWinner({ winner: newWinner }));
            //         }
            //     },
            //     { once: true },
            // );
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
