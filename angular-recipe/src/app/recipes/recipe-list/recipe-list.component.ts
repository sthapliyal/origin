import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";


@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipesListComponent implements OnInit{
    recipes: Recipe[] = [
        new Recipe('Calzone', 'Crispy calzones stuffed with cheese beat pizza slice any day', 'https://thecozyapron.com/wp-content/uploads/2021/01/calzone_thecozyapron_1.jpg'),
        new Recipe('Cheesy Florentine Pasta', 'The parmasan sauce is made with mozzarella and its packed with spinach and bell pappers for a pop of color', 'https://dinnerthendessert.com/wp-content/uploads/2018/04/Cheesy-Florentine-Pasta-680x454.jpg')
    ];

    constructor() {

    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}