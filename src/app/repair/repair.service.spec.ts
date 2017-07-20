import { TestBed, inject } from '@angular/core/testing';

import { RepairService } from './repair.service';

describe('RepairServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepairService]
    });
  });

  it('should be created', inject([RepairService], (service: RepairServiceService) => {
    expect(service).toBeTruthy();
  }));
});
