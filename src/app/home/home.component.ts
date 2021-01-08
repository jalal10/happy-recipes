import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeCatgorie } from '../models/RecipeCategorie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home";
  recipeCategories: RecipeCatgorie[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<RecipeCatgorie[]>("http://localhost:3000/recipe-categories")
        .subscribe((res)=>{
          this.recipeCategories = res;
        });
  }

  sortCategories(){
    this.recipeCategories.sort((a, b)=> b.rank - a.rank);
  }

}
