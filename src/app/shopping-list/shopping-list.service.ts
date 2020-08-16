import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients()  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice()); //ShoppingListComponent.ts has subscribed to this event this onInit
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //convert array of elements into a list of elements
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
