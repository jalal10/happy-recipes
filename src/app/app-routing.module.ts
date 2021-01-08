import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeCategoriesComponent } from './recipe-categories/recipe-categories.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe-categories', component: RecipeCategoriesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
