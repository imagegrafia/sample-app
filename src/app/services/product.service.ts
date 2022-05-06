import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //step 1 build url 
  // PRODUCT_URL = environment.API_URL + '/products';
  PRODUCT_URL = 'http://localhost:3000/products';
  
  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    console.log('product Url : '+this.PRODUCT_URL);
    
    return this.httpClient.get<any>(this.PRODUCT_URL)
  }

  //sample 
  // this.userService.getAllProducts().subscribe(res => this.products = data)
}
