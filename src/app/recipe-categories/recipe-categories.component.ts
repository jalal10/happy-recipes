
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeCatgorie } from '../models/RecipeCategorie';

@Component({
  selector: 'app-recipe-categories',
  templateUrl: './recipe-categories.component.html',
  styleUrls: ['./recipe-categories.component.css']
})
export class RecipeCategoriesComponent implements OnInit {
  recipeCategories : Array<RecipeCatgorie> = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<RecipeCatgorie[]>("http://localhost:3000/recipe-categories")
        .subscribe((res)=>{
          this.recipeCategories = res;
        });
  }

}
