import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { AuthService } from './auth.service';
import { MessagingService } from './messaging.service';
import { UserService } from './serveices/user.service';
import { Customer } from '../app/class/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  show;
  constructor(private messagingService: MessagingService,
    private authServic: AuthService , private userService: UserService) { }
  ngOnInit() {

    this.authServic.userProfile$.subscribe(user => {
      if (user) {
        this.userService.currentUser = new Customer();
        this.userService.currentUser.CustName = user.name;
        this.userService.currentUser.CustImg = user.picture;
        this.userService.currentUser.CustMail = user.email;
        this.userService.currentUser.CustNicName = user.nickname;
        this.userService.AddUser().subscribe();
      }
   
    });
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.show = this.messagingService.currentMessage


  }

  title = 'ebuy-app';
}
