import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CourseType, Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://localhost:7299/api/recipe/';

  onGetAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  onGetRecipe(id: any) : Observable<Recipe> {
    return this.http.get<Recipe>(this.apiUrl + id);
  }

  onPutRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.http.put<Recipe>(this.apiUrl + '?id=' + recipe.id, recipe);
  }

  onPostRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }
}
