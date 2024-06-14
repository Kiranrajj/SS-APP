import { TestBed } from '@angular/core/testing';

import { SupplyEntryService } from './supply-entry.service';

describe('SupplyEntryService', () => {
  let service: SupplyEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
