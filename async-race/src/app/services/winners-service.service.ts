import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Winner } from '../models/winners.interfaces';

@Injectable({
    providedIn: 'root',
})
export class WinnersService {
    private readonly baseUrl = 'http://127.0.0.1:3000';

    constructor(private http: HttpClient) {}

    getWinners(
        page: number,
        limit: number,
        sort: string,
        order: string,
    ): Observable<{ winners: Winner[] | null; totalCount: string }> {
        const url = `${this.baseUrl}/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
        return this.http.get<Winner[]>(url, { observe: 'response' }).pipe(
            map((response: HttpResponse<Winner[]>) => {
                const totalCount = response.headers.get('X-Total-Count');
                return {
                    winners: response.body,
                    totalCount: totalCount || '0',
                };
            }),
        );
    }

    getWinner(id: number): Observable<Winner> {
        const url = `${this.baseUrl}/winners/${id}`;
        return this.http.get<Winner>(url);
    }

    createWinner(winner: Winner): Observable<Winner> {
        const url = `${this.baseUrl}/winners`;
        return this.http.post<Winner>(url, winner);
    }

    updateWinner(
        id: number,
        winnerData: { wins: number; time: number },
    ): Observable<Winner> {
        const url = `${this.baseUrl}/winners/${id}`;
        return this.http.put<Winner>(url, winnerData);
    }

    deleteWinner(id: number): Observable<void> {
        const url = `${this.baseUrl}/winners/${id}`;
        return this.http.delete<void>(url);
    }
}
