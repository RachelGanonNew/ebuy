import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfNavComponent } from './cf-nav.component';

describe('CfNavComponent', () => {
  let component: CfNavComponent;
  let fixture: ComponentFixture<CfNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
