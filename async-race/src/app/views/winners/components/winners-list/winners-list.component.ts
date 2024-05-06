import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Winner } from '../../../../models/winners.interfaces';
import { WinnerComponent } from '../winner/winner.component';

@Component({
    selector: 'app-winners-list',
    standalone: true,
    imports: [WinnerComponent],
    templateUrl: './winners-list.component.html',
    styleUrl: './winners-list.component.scss',
})
export class WinnersListComponent {
    winsSortOrder: 'asc' | 'desc' = 'asc';
    timeSortOrder: 'asc' | 'desc' = 'asc';

    @Input() winners: Winner[] = [];

    @Output() sortEvent = new EventEmitter<{ type: string; order: string }>();

    sortWins(): void {
        this.winsSortOrder = this.winsSortOrder === 'asc' ? 'desc' : 'asc';

        this.sortEvent.emit({ type: 'wins', order: this.winsSortOrder });
    }

    sortTime(): void {
        this.timeSortOrder = this.timeSortOrder === 'asc' ? 'desc' : 'asc';
        this.sortEvent.emit({ type: 'time', order: this.timeSortOrder });
    }
}
