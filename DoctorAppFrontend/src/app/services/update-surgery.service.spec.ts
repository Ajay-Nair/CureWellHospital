import { TestBed } from '@angular/core/testing';

import { UpdateSurgeryService } from './update-surgery.service';

describe('UpdateSurgeryService', () => {
  let service: UpdateSurgeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSurgeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
