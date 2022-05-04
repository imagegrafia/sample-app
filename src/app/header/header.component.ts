import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  route$ = new Observable<any>();

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
   this.route$ = this.sharedService.allAppRoutes.asObservable();
  }


}
