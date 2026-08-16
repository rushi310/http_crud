import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../service/products.service";
import { IProduct } from "../../../model/ product";

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productsArr:IProduct[]=[];
  constructor(private _productService:ProductsService) { }

  ngOnInit(): void {
  
  this._productService.fetchProducts()
    .subscribe({
      next:(res:IProduct[])=>{
        console.log(res);
        this.productsArr = res;
      },
      error:(err)=>{
        console.log(err);
      }
    
    });
  
}
}
