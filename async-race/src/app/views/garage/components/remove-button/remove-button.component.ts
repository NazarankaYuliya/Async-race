import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-remove-button",
    standalone: true,
    imports: [],
    templateUrl: "./remove-button.component.html",
    styleUrl: "./remove-button.component.scss",
})
export class RemoveButtonComponent {
    @Output() delete = new EventEmitter<void>();

    deleteItem(): void {
        this.delete.emit();
    }
}
