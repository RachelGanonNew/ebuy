import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() onClickButton: EventEmitter<void> = new EventEmitter<void>();

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  onClick(): void {
    this.onClickButton.emit();
  }

}