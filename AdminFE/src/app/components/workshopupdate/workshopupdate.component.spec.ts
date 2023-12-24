import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopupdateComponent } from './workshopupdate.component';

describe('WorkshopupdateComponent', () => {
  let component: WorkshopupdateComponent;
  let fixture: ComponentFixture<WorkshopupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopupdateComponent]
    });
    fixture = TestBed.createComponent(WorkshopupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
