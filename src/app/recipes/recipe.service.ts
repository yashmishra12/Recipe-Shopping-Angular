import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Pizza',
      'Five Pepper Pizza',
      'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      [
        new Ingredient('Jalepano', 1),
        new Ingredient('Corn', 20),
        new Ingredient ('Mushroom', 5),
        new Ingredient('Cheese', 3)
      ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Burger',
      'Delicious Veg Burger',
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Lettuce', 5),
        new Ingredient('Tomato', 6)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); //slice ensures that we get a copy and not the original recipesArray
  }

}
