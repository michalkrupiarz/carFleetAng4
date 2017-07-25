import { TestBed, inject } from '@angular/core/testing';

import { SortCarService } from './sort-car.service';

describe('SortCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortCarService]
    });
  });

  it('should be created', inject([SortCarService], (service: SortCarService) => {
    expect(service).toBeTruthy();
  }));
});
