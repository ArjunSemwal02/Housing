import { TestBed } from '@angular/core/testing';

import { Housings } from './housings';

describe('Housings', () => {
  let service: Housings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Housings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
