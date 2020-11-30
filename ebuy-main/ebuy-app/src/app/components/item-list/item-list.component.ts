import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/serveices/request.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/Product';
@Component({
  selector: 'app-implement-get',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ImplementGetComponent implements OnInit {
  selectedProduct: any;
  result: Product[];
  goToCartComponent: boolean;
  showSlider:boolean;
  constructor(public router: Router) { }
  ngOnInit() {
    this.goToCartComponent = true;
    this.showSlider=true;
  }
  getList(list) {
    this.result = list;
    this.showSlider=false;
  }
  onclicked(product: any) {
    this.selectedProduct = product;
    this.showSlider=false;
  }

  // goToCart() {
  //   this.router.navigate(['/AddToCart']);
  //   this.goToCartComponent = false;
  // }




}
