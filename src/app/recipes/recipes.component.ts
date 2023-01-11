import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  getAllRecipes() {
    this.recipeService.onGetAllRecipes().subscribe(
      res => {
        this.recipe = res;
      }
    )
  }

  ngOnInit(): void {
    this.getAllRecipes();
  }

}
