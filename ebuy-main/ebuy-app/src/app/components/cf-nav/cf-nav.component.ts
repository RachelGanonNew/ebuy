import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cf-nav',
  templateUrl: './cf-nav.component.html',
  styleUrls: ['./cf-nav.component.css']
})
export class CfNavComponent implements OnInit {

  constructor(public auth: AuthService)  { }

  ngOnInit(): void {
  }

}
