import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopdeleteComponent } from './workshopdelete.component';

describe('WorkshopdeleteComponent', () => {
  let component: WorkshopdeleteComponent;
  let fixture: ComponentFixture<WorkshopdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopdeleteComponent]
    });
    fixture = TestBed.createComponent(WorkshopdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
