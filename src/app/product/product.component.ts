import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any;

  //step 1 Inject service
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //step 2 attach response to variable using service
    this.productService.getAllProducts().subscribe( resp => this.products = resp)
  }

}
