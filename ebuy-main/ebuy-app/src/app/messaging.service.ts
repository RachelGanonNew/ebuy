import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import {PushAlert} from '../app/class/PushAlert';
@Injectable()
export class MessagingService {
  url:string = "https://localhost:44389/api/push";
currentToken:string;
  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging, private http:HttpClient) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
         _messaging.onMessage = _messaging.onMessage.bind(_messaging);
       _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
 }

  requestPermission(){
    let push = new PushAlert();
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {  
        this.currentToken=token;
        this.http.post(this.url,push).subscribe();
        return token;
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
    
  }

  
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        this.currentMessage.next(payload);
      },
      (err) => {
        console.log("error: ",err);
      })
  }
} 