import { TestBed } from '@angular/core/testing';

import { PayCalculatorService } from './pay-calculator.service';

describe('PayCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayCalculatorService = TestBed.get(PayCalculatorService);
    expect(service).toBeTruthy();
  });
});
