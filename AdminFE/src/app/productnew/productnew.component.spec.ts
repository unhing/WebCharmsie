import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnewComponent } from './productnew.component';

describe('ProductnewComponent', () => {
  let component: ProductnewComponent;
  let fixture: ComponentFixture<ProductnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductnewComponent]
    });
    fixture = TestBed.createComponent(ProductnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
