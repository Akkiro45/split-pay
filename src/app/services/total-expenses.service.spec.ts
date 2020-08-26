import { TestBed } from '@angular/core/testing';

import { TotalExpensesService } from './total-expenses.service';

describe('TotalExpensesService', () => {
  let service: TotalExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
