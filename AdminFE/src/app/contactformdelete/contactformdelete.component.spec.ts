import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactformdeleteComponent } from './contactformdelete.component';

describe('ContactformdeleteComponent', () => {
  let component: ContactformdeleteComponent;
  let fixture: ComponentFixture<ContactformdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactformdeleteComponent]
    });
    fixture = TestBed.createComponent(ContactformdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
