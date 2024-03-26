import { TestBed } from '@angular/core/testing';

import { CustomerUiService } from './customer-ui-fancy.service';

describe('CustomerUiService', () => {
  let service: CustomerUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
