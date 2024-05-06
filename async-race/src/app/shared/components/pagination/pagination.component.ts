import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_PAGE, ONE_PAGE } from '../../constants';

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
    @Input() currentPage!: number;

    @Input() totalPages!: number;

    @Output() pageChange = new EventEmitter<number>();

    constructor() {}

    goToPage(page: number): void {
        if (page >= DEFAULT_PAGE && page <= this.totalPages) {
            this.pageChange.emit(page);
        }
    }

    goToFirstPage(): void {
        this.goToPage(DEFAULT_PAGE);
    }

    goToLastPage(): void {
        this.goToPage(this.totalPages);
    }

    goToPreviousPage(): void {
        this.goToPage(this.currentPage - ONE_PAGE);
    }

    goToNextPage(): void {
        this.goToPage(this.currentPage + ONE_PAGE);
    }

    isFirstPage(): boolean {
        return this.currentPage === DEFAULT_PAGE;
    }

    isLastPage(): boolean {
        return this.currentPage === this.totalPages;
    }
}
