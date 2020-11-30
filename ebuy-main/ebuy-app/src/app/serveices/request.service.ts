import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../class/Product';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { PushRequest } from 'src/app/class/push-request';
import { Alert } from '../class/alert';
import { ItemId } from '../class/item-id';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  currentProduct: Product;
  productToAlert: PushRequest;
  currentAlert: Alert;
  url: string = "https://localhost:44389/api/product/";
  constructor(private http: HttpClient) {

  }
  getItem(searchItem: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + searchItem)
      .pipe(map(res => { return Object.values(res) }))
  }

  // AddItemToCart(): Observable<any> {
  //   return this.http.post<any>(this.url + 'AddItemToCart', this.currentProduct);
  // }

  AddItemToCart() {
    return this.http.post<any>(this.url + 'AddItemToCart', this.currentProduct);
  }

  updateItemInCart(): Observable<Product> {
    return this.http.put<Product>(this.url + 'PutProduct', this.currentProduct);
  }

  GetItemList(mail: string): Observable<any> {
    return this.http.get<any>("https://localhost:44389/api/item/" + mail);
  }

  // sendItemToAlert(): Observable<Product[]> {
  //   return this.http.post<Product[]>("https://localhost:44389/api/messagingPush/" + 'SendItemToAlert', this.productToAlert);
  // }

  RemoveItem(currentItemId: ItemId): Observable<Product[]> {
    return this.http.post<Product[]>("https://localhost:44389/api/item/" + 'RemoveItem', currentItemId);
  }

  AddAlert(): Observable<any> {
    return this.http.post<any>("https://localhost:44389/api/alert/" + 'AddAlert', this.currentAlert);
  }
  putAddAlert(): Observable<Product> {
    return this.http.put<Product>("https://localhost:44389/api/alert/" + 'PutAddAlert', this.currentAlert);
  }

 
  getAlertList(mail:string):Observable<Alert[]>
  {
    return this.http.get<Alert[]>("https://localhost:44389/api/alert/" + mail);
  }
}


