import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Winner } from "../../../../models/winners.interfaces";
import { WinnerComponent } from "../winner/winner.component";

@Component({
    selector: "app-winners-list",
    standalone: true,
    imports: [WinnerComponent],
    templateUrl: "./winners-list.component.html",
    styleUrl: "./winners-list.component.scss",
})
export class WinnersListComponent {
    @Input() winners: Winner[] = [];
    @Output() sortWinsEvent = new EventEmitter<string>();

    sortWins() {
        this.sortWinsEvent.emit("wins");
    }

    sortTime() {
        this.sortWinsEvent.emit("time");
    }
}
