import { TestBed, inject } from '@angular/core/testing';

import { TireServiceService } from './tire-service.service';

describe('TireServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TireServiceService]
    });
  });

  it('should be created', inject([TireServiceService], (service: TireServiceService) => {
    expect(service).toBeTruthy();
  }));
});
