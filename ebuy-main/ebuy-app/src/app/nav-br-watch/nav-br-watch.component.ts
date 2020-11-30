import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-br-watch',
  templateUrl: './nav-br-watch.component.html',
  styleUrls: ['./nav-br-watch.component.css']
})
export class NavBrWatchComponent implements OnInit {

  constructor(public auth: AuthService,public router: Router) { }
  @Output() onClickBtn: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  
  }

  // navToAlertList()
  // {
  //   this.router.navigate(['/AlertList']);
  // }
  onClick(): void {
    this.onClickBtn.emit();
  }

}
