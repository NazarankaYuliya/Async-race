import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { Car, DriveModeResponse, EngineStatusResponse } from "../models/garage.interfaces";

@Injectable({
    providedIn: "root",
})
export class GarageService {
    private baseUrl = "http://127.0.0.1:3000";

    constructor(private http: HttpClient) {}

    getCars(page: number, limit: number): Observable<{ cars: Car[] | null; totalCount: string }> {
        const url = `${this.baseUrl}/garage?_page=${page}&_limit=${limit}`;
        return this.http.get<Car[]>(url, { observe: "response" }).pipe(
            map((response: HttpResponse<Car[]>) => {
                const totalCount = response.headers.get("X-Total-Count");
                return { cars: response.body, totalCount: totalCount || "0" };
            }),
        );
    }

    getCarById(id: number): Observable<Car> {
        const url = `${this.baseUrl}/garage/${id}`;
        return this.http.get<Car>(url);
    }

    createCar(carData: { name: string; color: string }): Observable<Car> {
        const url = `${this.baseUrl}/garage`;
        return this.http.post<Car>(url, carData);
    }

    deleteCar(id: number): Observable<any> {
        const url = `${this.baseUrl}/garage/${id}`;
        return this.http.delete<any>(url);
    }

    updateCar(id: number, carData: { name: string; color: string }): Observable<Car> {
        const url = `${this.baseUrl}/garage/${id}`;
        return this.http.put<Car>(url, carData);
    }

    startStopEngine(id: number, status: string): Observable<EngineStatusResponse> {
        const url = `${this.baseUrl}/engine?id=${id}&status=${status}`;
        return this.http.patch<EngineStatusResponse>(url, {});
    }

    switchEngineToDriveMode(id: number): Observable<DriveModeResponse> {
        const url = `${this.baseUrl}/engine?id=${id}&status=drive`;
        return this.http.patch<DriveModeResponse>(url, {});
    }
}
