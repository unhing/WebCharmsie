import { TestBed } from '@angular/core/testing';

import { WorkshopAdminService } from './workshop-admin.service';

describe('WorkshopAdminService', () => {
  let service: WorkshopAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
