import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timestamp } from 'rxjs/operators';
import { Alert } from 'src/app/class/alert';
import { Product } from 'src/app/class/Product';
import { PushRequest } from 'src/app/class/push-request';
import { MessagingService } from 'src/app/messaging.service';
import { RequestService } from 'src/app/serveices/request.service';
import { UserService } from 'src/app/serveices/user.service';
import { ItemId } from '../../class/item-id';
@Component({
  selector: 'app-adding-product',
  templateUrl: './persoal-area.component.html',
  styleUrls: ['./persoal-area.component.css']
})
export class AddingProductComponent implements OnInit {
  res: Product[];
  product: Product;
  @Input() alertName: any;
  @Input() addedItem: any;
  @Input() costumId: number;
  itemInCart: number;
  userMail: string;
  isShow = false;
  showBox = false;
  flag: boolean;
  itemList: Product[] = [];
  itemToUpdate: Product;
  createNewItem: Product;
  itemIdRemove: ItemId = new ItemId();
  constructor(
    public activeRoute: ActivatedRoute,
    public router: Router,
    public productService: RequestService,
    private userService: UserService,
    private messagingService: MessagingService) { }

  ngOnInit() {
    this.flag = false;
    this.userMail = this.userService.currentUser.CustMail;
    // debugger;
    this.fillCurrentProduct();
    this.displayItemList();

    this.displayItemList();



    if (this.alertName != null) {
      this.fillAlertData();
      // this.fillProductToAlert();

    }


  }


  removeItem(id: string) {
    this.itemIdRemove.itemId = id;
    this.productService.RemoveItem(this.itemIdRemove).subscribe(
      res => {
        this.itemList = res;
        this.itemInCart = this.itemInCart - 1;
      }
    )


  }
  onClickedOutside(e: Event) {
    this.showBox = !this.showBox;
  }





  fillCurrentProduct() {
    this.productService.currentProduct = new Product();
    this.productService.currentProduct.itemId = this.addedItem.itemId[0];
    this.productService.currentProduct.title = this.addedItem.title[0];
    this.productService.currentProduct.gallery = this.addedItem.galleryURL[0];
    this.productService.currentProduct.viewItem = this.addedItem.viewItemURL[0];
    this.productService.currentProduct.currentPrice = this.addedItem.sellingStatus[0].currentPrice[0].__value__;
    this.productService.currentProduct.condition = this.addedItem.condition[0].conditionDisplayName[0];
    this.productService.currentProduct.CustFK = this.userMail;
    if (this.alertName != null) {
      this.productService.currentProduct.haveAlertName = this.alertName[0];
    }


    this.productService.AddItemToCart().subscribe();
  }


  fillAlertData() {
    this.productService.currentAlert = new Alert();
    this.productService.currentAlert.AlertName = this.alertName[0];
    this.productService.currentAlert.title = this.addedItem.title[0];
    this.productService.currentAlert.token = this.messagingService.currentToken;
    this.productService.currentAlert.price = this.addedItem.sellingStatus[0].currentPrice[0].__value__;
    this.productService.currentAlert.isAlerted = 0;
    this.productService.currentAlert.mail = this.userMail;
    this.productService.currentAlert.galleryPic = this.addedItem.galleryURL[0];;

    this.productService.AddAlert().subscribe();

  }


  displayItemList() {
    this.productService.GetItemList(this.userMail).subscribe(
      res => {
        this.itemList = res;
        console.log("this.itemList.length");
        console.log(this.itemList);

        console.log(this.itemList.length);
        this.itemInCart = this.itemList.length;
      }
    );

  }




  getAlertName(data) {

    this.alertName = data;

    if (this.itemToUpdate != null) {

      this.updateAfterChange(this.itemToUpdate);
      this.UpdateAlertData(this.itemToUpdate);
    }
    else {

      this.updateAfterChange(this.createNewItem);
      this.createAlertData();
    }
    this.displayItemList();
    this.displayItemList();
    this.flag = false;

    // this.alertName = null;
    // this.itemToUpdate = null;

  }

  CreateopenChat(createItem: Product) {
    this.flag = true;
    this.createNewItem = createItem;
  }


  openChat(ToUpdateitem: Product) {

    this.flag = true;
    this.itemToUpdate = ToUpdateitem;

  }


  createAlertData() {
    this.productService.currentAlert = new Alert();
    this.productService.currentAlert.AlertName = this.alertName[0];
    this.productService.currentAlert.title = this.createNewItem.title;
    this.productService.currentAlert.token = this.messagingService.currentToken;
    this.productService.currentAlert.price = this.createNewItem.currentPrice;
    this.productService.currentAlert.isAlerted = 0;
    this.productService.currentAlert.mail = this.userMail;
    this.productService.currentAlert.galleryPic = this.createNewItem.gallery; ;
    this.productService.AddAlert().subscribe();

  }



  updateAfterChange(currentitem: Product) {

    this.productService.currentProduct = new Product();
    this.productService.currentProduct.itemId = currentitem.itemId;
    this.productService.currentProduct.title = currentitem.title;
    this.productService.currentProduct.gallery = currentitem.gallery;
    this.productService.currentProduct.viewItem = currentitem.viewItem;
    this.productService.currentProduct.currentPrice = currentitem.currentPrice;
    this.productService.currentProduct.condition = currentitem.condition;
    this.productService.currentProduct.CustFK = this.userMail;
    this.productService.currentProduct.haveAlertName = this.alertName[0];

    this.productService.updateItemInCart().subscribe();


  }

  UpdateAlertData(prodToUpdate: Product) {
    this.productService.currentAlert = new Alert();
    this.productService.currentAlert.AlertName = this.alertName[0];
    this.productService.currentAlert.title = prodToUpdate.title;
    this.productService.currentAlert.token = this.messagingService.currentToken;
    this.productService.currentAlert.price = prodToUpdate.currentPrice;
    this.productService.currentAlert.isAlerted = 0;
    this.productService.currentAlert.mail = this.userMail;
    this.productService.currentAlert.galleryPic = prodToUpdate.gallery;
    this.productService.putAddAlert().subscribe();


  }

   offset(el) {  
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,  
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;  
        console.log("top");         
        console.log(rect.top + scrollTop);
        console.log("left");         
        console.log(rect.left + scrollLeft); 
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

        }
 
}
