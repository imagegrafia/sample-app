import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //step 1 build url 
  PRODUCT_URL = environment.API_URL + '/products';
  
  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get<any>(this.PRODUCT_URL)
  }

  //sample 
  // this.userService.getAllProducts().subscribe(res => this.products = data)
}
