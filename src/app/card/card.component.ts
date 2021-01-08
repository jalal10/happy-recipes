import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeCatgorie } from '../models/RecipeCategorie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: RecipeCatgorie = new RecipeCatgorie();
  @Output() rankUpdated: EventEmitter<any> = new EventEmitter();
  
  constructor(private http:HttpClient) { 
  }
  
  ngOnInit(): void {
  }

  goToCategory(){
    console.log("goToCategory : ", this.data);
    this.data.rank+=1;
    this.http.put<RecipeCatgorie>("http://localhost:3000/recipe-categories/"+this.data.id, this.data, {})
        .subscribe(res=> this.rankUpdated.emit(this.data));
    //this.http.get<RecipeCatgorie[]>("http://localhost:3000/recipe-categories").subscribe(res=>console.log(res));
  }

}
