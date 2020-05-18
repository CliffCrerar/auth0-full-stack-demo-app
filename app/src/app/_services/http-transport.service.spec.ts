import { TestBed } from '@angular/core/testing';

import { HttpTransportService } from './http-transport.service';

describe('HttpTransportService', () => {
  let service: HttpTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
