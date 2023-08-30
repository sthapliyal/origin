import { Component } from "@angular/core";
import { Ingredent } from "../shared/ingredent.model";


@Component({
    selector:'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
    ingredients : Ingredent[] = [
        new Ingredent('Apple', 10),
        new Ingredent('Orange', 35)
    ];

}