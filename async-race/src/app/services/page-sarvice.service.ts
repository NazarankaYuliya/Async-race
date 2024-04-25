import { Injectable } from "@angular/core";

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../shared/constants";

@Injectable({
    providedIn: "root",
})
export class PageSarviceService {
    private currentPage: number = DEFAULT_PAGE;
    private pageSize: number = DEFAULT_PAGE_SIZE;

    constructor() {}

    getCurrentPage(): number {
        return this.currentPage;
    }

    setCurrentPage(page: number): void {
        this.currentPage = page;
    }

    getPageSize(): number {
        return this.pageSize;
    }

    setPageSize(size: number): void {
        this.pageSize = size;
    }
}
