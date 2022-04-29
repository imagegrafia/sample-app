import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
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
