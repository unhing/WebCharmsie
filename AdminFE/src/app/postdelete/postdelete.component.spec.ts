import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdeleteComponent } from './postdelete.component';

describe('PostdeleteComponent', () => {
  let component: PostdeleteComponent;
  let fixture: ComponentFixture<PostdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostdeleteComponent]
    });
    fixture = TestBed.createComponent(PostdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
