import { TestBed } from '@angular/core/testing';

import { StateBalanceService } from './state-balance.service';

describe('StateBalanceService', () => {
  let service: StateBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
