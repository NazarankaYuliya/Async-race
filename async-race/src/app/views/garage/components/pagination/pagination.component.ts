import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DEFAULT_PAGE } from "../../../../shared/constants";

@Component({
    selector: "app-pagination",
    standalone: true,
    imports: [],
    templateUrl: "./pagination.component.html",
    styleUrl: "./pagination.component.scss",
})
export class PaginationComponent {
    @Input() currentPage!: number;
    @Input() totalPages!: number;

    @Output() pageChange = new EventEmitter<number>();

    constructor() {}

    goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
            this.pageChange.emit(page);
        }
    }

    goToFirstPage(): void {
        this.goToPage(1);
    }

    goToLastPage(): void {
        this.goToPage(this.totalPages);
    }

    goToPreviousPage(): void {
        this.goToPage(this.currentPage - 1);
    }

    goToNextPage(): void {
        this.goToPage(this.currentPage + 1);
    }

    isFirstPage(): boolean {
        return this.currentPage === 1;
    }

    isLastPage(): boolean {
        return this.currentPage === this.totalPages;
    }
}
