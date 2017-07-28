import { TestBed, inject } from '@angular/core/testing';

import { LendServiceService } from './lend-service.service';

describe('LendServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LendServiceService]
    });
  });

  it('should be created', inject([LendServiceService], (service: LendServiceService) => {
    expect(service).toBeTruthy();
  }));
});
