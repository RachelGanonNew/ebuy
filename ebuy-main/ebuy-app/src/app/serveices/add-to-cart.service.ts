import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../class/Product';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  currentProduct:Product;
  url: string ="https://localhost:44389/api/Product/";
  constructor(private http: HttpClient) { }
  AddItemToCart(): Observable<any> {
    return this.http.post<any>(this.url + 'AddItemToCart' ,this.currentProduct);
  }

}


