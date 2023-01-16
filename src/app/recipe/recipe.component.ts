import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categoryTypesDisplay, courseTypesDisplay } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute) {}

id = this.activeRoute.snapshot.params['id'];
recipe: any = {};
courseTypesDisplay = courseTypesDisplay;
categoryTypesDisplay = categoryTypesDisplay;

getRecipe() {
  this.recipeService.onGetRecipe(this.id).subscribe(
    response => {
      this.recipe = response;
      console.log(response);
    }
  )
}
  ngOnInit(): void {
    this.getRecipe();
    console.log(courseTypesDisplay);
  }
}
