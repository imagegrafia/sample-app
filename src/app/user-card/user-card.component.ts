import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  products =[ 
    {name:"Apple laptop", price :20000},
    {name:"Dell laptop", price :20000},
    {name:"Lg laptop", price :20000},
    {name:"Samsung laptop", price :20000},
    {name:"Dell laptop", price :20000},
    {name:"Lg laptop", price :20000},
    {name:"Samsung laptop", price :20000},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
