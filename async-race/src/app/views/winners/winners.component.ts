import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Winner } from "../../models/winners.interfaces";
import { PaginationComponent } from "../../shared/components/pagination/pagination.component";
import { DEFAULT_PAGE } from "../../shared/constants";
import { loadWinners, setPage } from "../../store/winners/winners.actions";
import { selectLimit, selectPage, selectTotalCount, selectWinners } from "../../store/winners/winners.selectors";
import { WinnersListComponent } from "./components/winners-list/winners-list.component";

@Component({
    selector: "app-winners",
    standalone: true,
    imports: [CommonModule, PaginationComponent, WinnersListComponent],
    templateUrl: "./winners.component.html",
    styleUrl: "./winners.component.scss",
})
export class WinnersComponent implements OnInit {
    winners$!: Observable<Winner[]>;
    totalWinners$!: Observable<string>;
    currentPage$!: Observable<number>;
    pageSize$!: Observable<number>;
    totalPages!: number;
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.loadWinners();
    }

    loadWinners(): void {
        this.store.dispatch(loadWinners());
        this.winners$ = this.store.select(selectWinners);
        this.totalWinners$ = this.store.select(selectTotalCount);
        this.currentPage$ = this.store.select(selectPage);
        this.pageSize$ = this.store.select(selectLimit);
        this.totalWinners$.subscribe((count) => {
            this.calculateTotalPages(+count);
        });
    }

    calculateTotalPages(totalWinners: number): void {
        this.pageSize$.subscribe((pageSize) => {
            this.totalPages = Math.ceil(totalWinners / pageSize);
        });
    }

    goToPage(page: number): void {
        if (page >= DEFAULT_PAGE && page <= this.totalPages) {
            this.store.dispatch(setPage({ page }));
            this.loadWinners();
        }
    }
}
