
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
        }, 
        (err) =>{
          this.recipeCategories = [{"id":"54345b3f-81bc-4b5f-8358-1551f14868d9","name":"Salade","picture":"public/images/Salade.jpg","rank":16},{"id":"9d0a7bb6-ca03-419c-87f0-1d9cd5e724b1","name":"Pizza","picture":"public/images/Pizza.jpg","rank":16},{"id":"1ce41591-dda1-4cc0-b6fc-01a1dab6f367","name":"Jus","picture":"public/images/Jus.jpg","rank":15},{"id":"b11677f8-782e-464b-8145-ecc00905cfb4","name":"Burger","picture":"public/images/Burger.jpg","rank":11},{"id":"4f25221d-f1e8-475d-80ef-8cf82fee193c","name":"Tajine","picture":"public/images/Tajine.jpg","rank":1},{"id":"7752a357-538f-4aed-994f-25ddaed55473","name":"Tacos","picture":"public/images/Tacos.jpg","rank":1},{"id":"c2c03792-5e67-4a2c-99c1-b06c5787b17d","name":"Dessert","picture":"public/images/Dessert.jpg","rank":0},{"id":"39668608-1689-4d34-87ab-d1c305eb158d","name":"Pâtes","picture":"public/images/Pâtes.jpg","rank":0}];
        });
  }

}
