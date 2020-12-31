import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home";
  users = [
    {id:"1", firstName:"John", lastName:"Smith"},
    {id:"2", firstName:"Jalal", lastName:"AAFER"},
    {id:"3", firstName:"Youssef", lastName:"HAMOUCH"},
    {id:"4", firstName:"Abdo", lastName:"KASSIMI"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
