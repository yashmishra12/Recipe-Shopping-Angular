import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor() { }
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Pizza', 'Five Pepper Pizza', 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Cherry', 'Delicious Cherry Dessert', 'https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  ngOnInit(): void {
  }
  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
