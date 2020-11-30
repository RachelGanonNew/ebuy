import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { ConversationalForm } from 'conversational-form';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'myForm',
  template: `<div [hidden]="onPage" class="myCF" #myCF></div><datalist id="per">
  <option value="10%">
  <option value="20%">
  <option value="30%">
  <option value="40%">
  <option value="50%">
  <option value="60%">
  <option value="70%">
  <option value="80%">
  <option value="Max">
</datalist>`
,
})
export class FormComponent {
  @ViewChild('myCF') myCF: ElementRef;
  cf: any;
  CHOOSE:any = 'choose';
  onPage=false;
  isOpen = true;
  parameter:any[]=[];
  @Output() onChoose = new EventEmitter();
  constructor(public router: Router) { }
  formFields = [
    {  
      'tag': 'input',
      'type': 'radio',
      'required': 'true',
      'name': 'welcome',
      'value': 'create',
      'id': 'create',
      'cf-label': "Create Alert",
      'cf-questions': "Welcome to ebuy notification ! 😊"
    },
    {
      'tag': 'input',
      'type': 'radio',
      'required': 'true',
      'name': 'welcome',
      'value': 'about',
      'id': 'about',
      'cf-label': "About ebuy alert"
    },
    {
      'tag': 'input',
      'type': 'text',
      'cf-questions': "Allows you to create an alert for a particular product and be notified.",
      'cf-conditional-welcome': "about",
      'value': "Like 👍👍👍",
      'name': 'info',
      'id': 'info'
    },
    {
      'tag': 'input',
      'type': 'radio',
      'required': 'true',
      'multiple': "true",
      'name': 'select',
      'value': 'discount',
      'id': 'discount',
      "cf-label": "Any Discount",
      "cf-questions":
      "Which notification are you interested in? ",
      "cf-input-placeholder": "Any Discount",
    },
    {
      'tag': 'input',
      'type': 'radio',
      'multiple': "true",
      'required': 'true',
      'name': 'select',
      'value': 'choose',
      'id': 'choose',
      "cf-label": "Choose.."
    },
    {
      'tag': 'input',
      'type': 'radio',
      'required': 'true',
      'multiple': "true",
      'name': 'select',
      'value': 'avilable',
      'id': 'avilable',
      "cf-label": "Last 10 Avilable"
    },
    {
      'tag': 'input',
      'type': 'text',
      'name': 'per',
      'list': 'per',
      'cf-questions': 'Gimme alert on sale of...',
      'cf-conditional-select': "choose"
    },
  ];

  ngOnInit() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback.bind(this),
        theme: 'dark',
        preventAutoFocus: true,
      },
      tags: this.formFields
    });
  }

  submitCallback() {

    var formDataSerialized = this.cf.getFormData(true);
    this.cf.addRobotChatResponse("It was fun to meet you ! 😊");
    this.parameter = formDataSerialized['select'];
    if(this.parameter == this.CHOOSE)
    {
      this.parameter = formDataSerialized.per;
      
    }
    this.onChoose.emit(this.parameter);
    
    this.router.navigate(['/AddToCart']);
    this.cf.remove();
  }
}