import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { IProduct } from "../model/ product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  PRODUCT_BASE_URL = environment.PRODUCT_BASE_URL;
  PRODUCT_URL = `${this.PRODUCT_BASE_URL}/products`;
  constructor(private _http:HttpClient) { }
  fetchProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.PRODUCT_URL)
  }
}
