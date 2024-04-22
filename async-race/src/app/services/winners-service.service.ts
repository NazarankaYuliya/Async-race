import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Winner } from "../models/winners.interfaces";

@Injectable({
    providedIn: "root",
})
export class WinnersService {
    private readonly winnersUrl = "http://127.0.0.1:3000/winners";

    constructor(private http: HttpClient) {}

    getWinners(page?: number, limit?: number): Observable<Winner[]> {
        let url = this.winnersUrl;
        if (page && limit) {
            url += `?_page=${page}&_limit=${limit}`;
        }
        return this.http.get<Winner[]>(url);
    }

    getWinner(id: number): Observable<Winner> {
        return this.http.get<Winner>(`${this.winnersUrl}/${id}`);
    }

    createWinner(winner: Winner): Observable<Winner> {
        return this.http.post<Winner>(this.winnersUrl, winner);
    }

    updateWinner(id: number, winner: Winner): Observable<Winner> {
        return this.http.put<Winner>(`${this.winnersUrl}/${id}`, winner);
    }

    deleteWinner(id: number): Observable<void> {
        return this.http.delete<void>(`${this.winnersUrl}/${id}`);
    }
}
