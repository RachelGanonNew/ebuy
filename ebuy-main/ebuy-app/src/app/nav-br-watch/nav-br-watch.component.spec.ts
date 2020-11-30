import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBrWatchComponent } from './nav-br-watch.component';

describe('NavBrWatchComponent', () => {
  let component: NavBrWatchComponent;
  let fixture: ComponentFixture<NavBrWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBrWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBrWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
