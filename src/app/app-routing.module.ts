import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFamiliesComponent } from './recipe-families/recipe-families.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe-families', component: RecipeFamiliesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
