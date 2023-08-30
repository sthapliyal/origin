import { CommonModule } from "@angular/common";
import { Component, Signal, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

@Component({
    standalone: true,
    selector: 'app-signals',
    templateUrl: './signals.component.html',
    imports: [MatButtonModule,MatListModule,CommonModule],
})
export class SignalsComponent {
    actions = signal<string[]>([]);
    counter = signal(0);

    increment() {
        this.counter.update(oldValue => oldValue + 1);
        this.actions.mutate(oldState => oldState.push("INCREMENT"));
    }

    decrement() {
        this.counter.mutate(oldValue => oldValue - 1);
        this.actions.update((oldState) => [...oldState, "DECREMENT"]);
    }
}