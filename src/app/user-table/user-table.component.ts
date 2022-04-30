import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users =[ 
    {name:"Krishna Kumar", email :"demo@gmail.com", pass:"Ke@5445", sl:"1"},
    {name:"Ramesh Sharma", email :"demo@gmail.com", pass:"Ke@5445", sl:"2"},
    {name:"Bahadur Shashtri", email :"demo@gmail.com", pass:"Ke@5445", sl:"3"},
    {name:"Ranvir Kapoor", email :"demo@gmail.com", pass:"Ke@5445", sl:"4"},
    {name:"Salman Khan", email :"demo@gmail.com", pass:"Ke@5445", sl:"5"},
    {name:"Alia Bhatt", email :"demo@gmail.com", pass:"Ke@5445", sl:"6"},
    {name:"Lorem Dicosta", email :"demo@gmail.com", pass:"Ke@5445", sl:"7"},
    {name:"Jhohn Donne", email :"demo@gmail.com", pass:"Ke@5445", sl:"8"},
    {name:"Lalbahadur Shashtri", email:"demo@gmail.com", pass:"Ke@5445", sl:"9"},
    {name:"Mahatma Gandhi", email:"demo@gmail.com", pass:"Ke@5445", sl:"10"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
