import { TestBed } from '@angular/core/testing';

import { DichvuService } from './dichvu.service';

describe('DichVuService', () => {
  let service: DichvuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DichvuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
