import { TestBed } from '@angular/core/testing';

import { FillListService } from './fill-list.service';

describe('FillListService', () => {
  let service: FillListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
