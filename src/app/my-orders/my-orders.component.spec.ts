import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MYOrdersComponent } from './my-orders.component';

describe('MYOrdersComponent', () => {
  let component: MYOrdersComponent;
  let fixture: ComponentFixture<MYOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MYOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MYOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
