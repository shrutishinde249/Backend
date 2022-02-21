import { TestBed } from '@angular/core/testing';

import { NetApiService } from './net-api.service';

describe('NetApiService', () => {
  let service: NetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
