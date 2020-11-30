import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopHeaderComponent } from './pop-header.component';

describe('PopHeaderComponent', () => {
  let component: PopHeaderComponent;
  let fixture: ComponentFixture<PopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
