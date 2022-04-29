import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  appRouting$ = new BehaviorSubject<any>([]);
  constructor() { }
}
