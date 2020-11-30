import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementGetComponent } from './item-list.component';

describe('ImplementGetComponent', () => {
  let component: ImplementGetComponent;
  let fixture: ComponentFixture<ImplementGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
