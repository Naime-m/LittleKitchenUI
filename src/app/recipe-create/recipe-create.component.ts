import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CourseType } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {

  recipe: any = {};
  courseTypes: any = CourseType;
  categories: any = Category;
  keys = Object.keys;
constructor( private recipeService: RecipeService, private router: Router, ) {}

  createRecipe() {
    this.recipeService.onPostRecipe(this.recipe).subscribe(
      response => {
        this.router.navigate(['/recipes']);
      }
    )
  }
}
