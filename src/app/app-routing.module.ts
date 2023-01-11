import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path:'' ,pathMatch: 'full', redirectTo:'recipes'},
  {path:'recipes', component: RecipesComponent},
  {path:'recipe/:id', component:RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
