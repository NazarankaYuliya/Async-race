import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { Car, EngineStatusResponse } from "../models/garage.interfaces";
import { Winner } from "../models/winners.interfaces";
import { createWinner, updateWinner } from "../store/winners/winners.actions";
import { GarageService } from "./garage-service.service";
import { WinnersService } from "./winners-service.service";
import { isMoving } from "../store/cars/cars.actions";
import { ModalComponent } from "../views/garage/components/modal/modal.component";
import { MatDialog } from "@angular/material/dialog";

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
        private dialog: MatDialog,
    ) {}

    startMoving(car: Car) {
        this.saveAsWinner = false;
        this.startEngine(car);
    }

    startEngine(car: Car) {
        this.store.dispatch(isMoving({ isMoving: true }));
        if (car.id) {
            this.engineStartSubscription = this.service
                .startStopEngine(car.id, "started")
                .subscribe((res: EngineStatusResponse) => {
                    if (res && car.id) {
                        const animationTimeInSeconds = this.getCarSpeed(res);
                        this.animateCar(animationTimeInSeconds, car);
                        this.switchEngineToDriveMode(car, animationTimeInSeconds, this.saveAsWinner);
                    }
                });
        }
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
            if (car.id && this.saveAsWinner) {
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

                this.openWinnerModal(car.name, animationTimeInSeconds);

                this.isFirstCarArrived = true;
            }
        }
    }

    startRace(cars: Car[]) {
        this.saveAsWinner = true;
        cars.map((car) => this.startEngine(car));
    }

    resetMovingForAll(cars: Car[]) {
        this.saveAsWinner = false;
        cars.forEach((car) => this.resetMoving(car));
    }

    resetMoving(car: Car) {
        this.store.dispatch(isMoving({ isMoving: false }));
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
            carElement.style.animationPlayState = "running";
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

    openWinnerModal(winnerName: string, time: number): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            data: { winnerName, time },
        });
        setTimeout(() => {
            dialogRef.close();
        }, 4000);
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
