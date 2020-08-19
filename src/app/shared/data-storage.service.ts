import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  fireBaseEndPoint: string = '';
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
    this.fireBaseEndPoint = environment.fireBaseEndPoint;
  }


  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.fireBaseEndPoint,
      recipes).subscribe(
        response => {
          console.log(response);
        }
    );
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>( this.fireBaseEndPoint).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }

}
