import { Car } from '../models/garage.interfaces';
import { MAX_COLOR_VALUE, ONE } from '../shared/constants';

const carBrands: string[] = [
    'Tesla',
    'Ford',
    'Chevrolet',
    'Toyota',
    'Honda',
    'BMW',
    'Mercedes',
    'Audi',
    'Volkswagen',
    'Lamborghini',
];

const carModels: string[] = [
    'Model S',
    'Mustang',
    'Camaro',
    'Corolla',
    'Accord',
    'X5',
    'E-Class',
    'A4',
    'Golf',
    'Aventador',
];

function generateRandomName(): string {
    const randomFirstPart =
        carBrands[Math.floor(Math.random() * carBrands.length)];
    const randomSecondPart =
        carModels[Math.floor(Math.random() * carModels.length)];
    return `${randomFirstPart} ${randomSecondPart}`;
}

function generateRandomColor(): string {
    const red = Math.floor(Math.random() * MAX_COLOR_VALUE);
    const green = Math.floor(Math.random() * MAX_COLOR_VALUE);
    const blue = Math.floor(Math.random() * MAX_COLOR_VALUE);
    return `rgb(${red}, ${green}, ${blue})`;
}

export function generateRandomCars(count: number): Car[] {
    const cars: Car[] = [];

    for (let i = 0; i < count; i += ONE) {
        const randomName = generateRandomName();
        const randomColor = generateRandomColor();
        const newCar: Car = {
            name: randomName,
            color: randomColor,
        };
        cars.push(newCar);
    }
    return cars;
}
