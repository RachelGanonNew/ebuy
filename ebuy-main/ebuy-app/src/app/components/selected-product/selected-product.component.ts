
import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/serveices/request.service';
import { Img } from 'src/app/class/img';
import { Product } from 'src/app/class/Product';
import { PushAlert } from 'src/app/class/PushAlert';
import { Alert } from '../../class/alert';
// import { NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  paramToAlert: any;
  @Input() Product: any;
  result: Product[] = [];
  addedItemToCart: any;
  reloadStorage: any;


  public show: boolean = false;
  // public buttonName: any = 'Show';



  constructor(private getServiece: RequestService, public activeRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.result = null;
    this.getServiece.getItem(this.Product.title).subscribe(
      res => {
        this.result = res;
        console.log("selecteditemArray");
        console.log(this.result);

      });

    //store the previos searches at local storage

    var storageArray = [];

    storageArray = JSON.parse(localStorage.getItem('storageItem')) || [];
    storageArray.push(this.Product);
    localStorage.setItem('storageItem', JSON.stringify(storageArray));
    var test2 = localStorage.getItem('storageItem');
    test2 = JSON.parse(test2);
    this.reloadStorage = test2;

    //if there are more than 10 items -delete from the begining
    if (this.reloadStorage.length > 10) {
      var numInStorage: number
      numInStorage = this.reloadStorage.length;
      storageArray.splice(0, 1);
      localStorage.setItem('storageItem', JSON.stringify(storageArray));
      var test2 = localStorage.getItem('storageItem');
      test2 = JSON.parse(test2);
      this.reloadStorage = test2;
    }
  }


  getAlert(flag)
  {
    this.paramToAlert = flag;
  }

  getAlertName(data)
  { 
    this.paramToAlert = data;
  }

  clickUrl(prod: any) {
   this.Product = null;
    this.Product = prod;
    this.ngOnInit();

  }


  addToCart(item: any) {
    this.addedItemToCart = item;

  }

  




}











































