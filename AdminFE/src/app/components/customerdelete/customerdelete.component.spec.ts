import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdeleteComponent } from './customerdelete.component';

describe('CustomerdeleteComponent', () => {
  let component: CustomerdeleteComponent;
  let fixture: ComponentFixture<CustomerdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerdeleteComponent]
    });
    fixture = TestBed.createComponent(CustomerdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
