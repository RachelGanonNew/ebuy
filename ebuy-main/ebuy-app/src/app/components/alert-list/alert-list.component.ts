import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Alert } from 'src/app/class/alert';
import { Product } from 'src/app/class/Product';
import { RequestService } from 'src/app/serveices/request.service';
import { UserService } from 'src/app/serveices/user.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  userMail: string;
  itemList: Alert[] = [];
  constructor(public productService: RequestService, private userService: UserService, public auth: AuthService) {

  }

  ngOnInit(): void {
    debugger;
    this.userMail = this.userService.currentUser.CustMail;
    if (this.userService.currentUser.CustMail != null) {
      this.productService.getAlertList(this.userMail).subscribe(
        res => {
          this.itemList = res;
          console.log("alertList");
          console.log(this.itemList);
          
        }
      );
    }
  }

}
