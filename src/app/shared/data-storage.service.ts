import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {environment} from '../../environments/environment';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  fireBaseEndPoint: string = '';

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
    this.fireBaseEndPoint = environment.fireBaseEndPoint;
  }

  storeRecipes() {
    const userData:{email: string, id: string,_token: string, _tokenExpirationDate: string} = JSON.parse(localStorage.getItem('userData'));
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        this.fireBaseEndPoint,
        recipes,
        { params: new HttpParams().set('auth', userData._token )}
      )
      .subscribe(response => {
        console.log(response);
      });
  }



fetchRecipes() {
  return this.authService.user.pipe(
    take(1),
    exhaustMap(user => {
      return this.http.get<Recipe[]>(
        this.fireBaseEndPoint,
        {
          params: new HttpParams().set('auth', user.token)
        }
      );
    }),
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
  );
}


}
