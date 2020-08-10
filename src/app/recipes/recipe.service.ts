import {Recipe} from './recipe.model';

export class RecipeService{
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Pizza', 'Five Pepper Pizza', 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Cherry', 'Delicious Cherry Dessert', 'https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
  ];

  getRecipes() {
    return this.recipes.slice(); //slice ensures that we get a copy and not the original recipesArray
  }

}
