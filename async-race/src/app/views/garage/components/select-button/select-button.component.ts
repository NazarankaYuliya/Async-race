import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-select-button',
    standalone: true,
    imports: [],
    templateUrl: './select-button.component.html',
    styleUrl: './select-button.component.scss',
})
export class SelectButtonComponent {
    @Input() selected: boolean = false;

    @Output() selectionChanged = new EventEmitter<boolean>();

    toggleSelection(): void {
        this.selectionChanged.emit(!this.selected);
    }
}
