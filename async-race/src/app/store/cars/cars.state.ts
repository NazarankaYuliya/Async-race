import { Car } from "../../models/garage.interfaces";

export interface CarsModel {
    cars: Car[];
    totalCount: string;
    errorMessage: string;
    selectedCar: Car | null;
}

export const carsState: CarsModel = {
    cars: [],
    totalCount: "0",
    errorMessage: "",
    selectedCar: null,
};
