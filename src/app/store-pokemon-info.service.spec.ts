import { TestBed } from '@angular/core/testing';
import { StorePokemonInfoService } from './store-pokemon-info.service';

describe('StorePokemonInfoService', () => {
  let service: StorePokemonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorePokemonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
