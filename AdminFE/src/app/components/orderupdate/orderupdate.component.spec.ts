import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderupdateComponent } from './orderupdate.component';

describe('OrderupdateComponent', () => {
  let component: OrderupdateComponent;
  let fixture: ComponentFixture<OrderupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderupdateComponent]
    });
    fixture = TestBed.createComponent(OrderupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
