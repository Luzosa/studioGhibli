import { TestBed } from '@angular/core/testing';

import { StudioGhibliService } from './studio-ghibli.service';

describe('StudioGhibliService', () => {
  let service: StudioGhibliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudioGhibliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
