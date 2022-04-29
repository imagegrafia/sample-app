import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appRoute$ = new Observable<any>();
  constructor(private sharedService: SharedService) { }
  ngOnInit(): void {
    this.appRoute$ = this.sharedService.appRouting$.asObservable();
  }

  routes = [
    'Ashish'
  ]
}
