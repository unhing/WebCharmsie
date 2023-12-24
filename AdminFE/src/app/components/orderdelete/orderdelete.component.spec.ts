import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdeleteComponent } from './orderdelete.component';

describe('OrderdeleteComponent', () => {
  let component: OrderdeleteComponent;
  let fixture: ComponentFixture<OrderdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderdeleteComponent]
    });
    fixture = TestBed.createComponent(OrderdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
