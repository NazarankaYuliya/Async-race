import { Car } from "../../models/garage.interfaces";

export interface CarsModel {
    cars: Car[];
    totalCount: string;
    page: number;
    limit: number;
    errorMessage: string;
    selectedCar: Car | null;
}

export const carsState: CarsModel = {
    cars: [],
    totalCount: "0",
    page: 1,
    limit: 7,
    errorMessage: "",
    selectedCar: null,
};
