import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-header',
  templateUrl: './pop-header.component.html',
  styleUrls: ['./pop-header.component.css']
})
export class PopHeaderComponent implements OnInit {
  // goToCartComponent: boolean;
  isClicked: boolean = false;
  isClickedBtn:boolean = false;
  constructor(public auth: AuthService,public routing:Router) {
  }

  ngOnInit(): void {
    // this.goToCartComponent = true;
  }
  showProfile(): void {
    this.isClicked = true;
  }
  showAlertList():void{
    this.isClickedBtn =true;
  }

  // goToCart() {
  //   this.routing.navigate(['/AddToCart']);
  //   this.goToCartComponent = false;
  // }


}
