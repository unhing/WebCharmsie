import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopdetailComponent } from './workshopdetail.component';

describe('WorkshopdetailComponent', () => {
  let component: WorkshopdetailComponent;
  let fixture: ComponentFixture<WorkshopdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopdetailComponent]
    });
    fixture = TestBed.createComponent(WorkshopdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
