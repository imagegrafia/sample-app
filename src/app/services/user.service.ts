import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_URL = environment.API_URL + '/users';
  constructor(private httpClient: HttpClient) { 
  }
  getUsers() {
    return this.httpClient.get<any>(this.USER_URL);
  }
  saveUser(userData: any) {
    return this.httpClient.post<any>(this.USER_URL, userData);
  }
}
