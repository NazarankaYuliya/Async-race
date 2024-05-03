import { Component, Input } from "@angular/core";

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
}
