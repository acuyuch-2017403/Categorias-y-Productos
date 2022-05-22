import { Component, OnInit } from '@angular/core';
import { ProductRestService } from 'src/app/services/productRest/product-rest.service';
import { CategoryRestService } from 'src/app/services/categoryRest/category-rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;

  constructor(
    private productRest: ProductRestService,
    private categoryRest: CategoryRestService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategorys();
  }

  getProducts(){
    this.productRest.getProducts().subscribe({
      next: (res:any)=> this.products = res.products,
      error: (err)=>alert(err.error.message)
    })
  }

  getCategorys(){
    this.categoryRest.getCategorys().subscribe({
      next: (res:any)=>console.log(res),
      error: (err)=>console.log(err)
    })
  }

}
