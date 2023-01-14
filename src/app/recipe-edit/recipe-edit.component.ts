import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CourseType, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private recipeService: RecipeService, private actRoute: ActivatedRoute, private router: Router) { }

  recipe: any = {};
  id = this.actRoute.snapshot.params['id'];


  editRecipe() {
    this.recipeService.onPutRecipe(this.recipe).subscribe(
      response => {
        this.router.navigate(['/recipes']);
      }
    )
  }

  getRecipe() {
    this.recipeService.onGetRecipe(this.id).subscribe(
      response => {
        this.recipe = response;
      }
    )
  }

  ngOnInit(): void {
    this.getRecipe()
  }
}
