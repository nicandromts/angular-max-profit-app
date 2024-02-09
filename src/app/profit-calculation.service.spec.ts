import { TestBed } from '@angular/core/testing';

import { ProfitCalculationService } from './profit-calculation.service';

describe('ProfitCalculationService', () => {
  let service: ProfitCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfitCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
