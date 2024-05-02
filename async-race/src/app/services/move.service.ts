import { Injectable } from "@angular/core";
import { GarageService } from "./garage-service.service";
import { Car, EngineStatusResponse } from "../models/garage.interfaces";
import { Observable, Subject, Subscription, take } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class MoveService {
    private engineStartSubscription?: Subscription;
    private engineModeSwitchSubscription?: Subscription;
    private animationFinished: boolean = false;
    finishedCars: { car: Car; time: number }[] = [];

    constructor(private service: GarageService) {}

    startMoving(car: Car) {
        if (car.id) {
            this.engineStartSubscription = this.service
                .startStopEngine(car.id, "started")
                .subscribe((res: EngineStatusResponse) => {
                    if (res && car.id) {
                        const animationTimeInSeconds = this.getCarSpeed(res);
                        this.animateCar(animationTimeInSeconds, car);

                        this.engineModeSwitchSubscription = this.service.switchEngineToDriveMode(car.id).subscribe(
                            () => {},
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
            this.service.startStopEngine(car.id, "stopped").subscribe();
            const carElement = this.getCarElement(car);
            if (carElement) {
                carElement.classList.remove("moving");
            }
        }
    }

    animateCar(animationTimeInSeconds: number, car: Car) {
        const carElement = this.getCarElement(car);
        if (carElement) {
            carElement.style.animationDuration = animationTimeInSeconds + "s";
            carElement.classList.add("moving");

            carElement.addEventListener(
                "animationend",
                () => {
                    this.finishedCars.push({ car: car, time: animationTimeInSeconds });
                },
                { once: true },
            );
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
