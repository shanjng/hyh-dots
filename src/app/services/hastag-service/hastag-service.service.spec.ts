import { TestBed } from '@angular/core/testing';

import { HastagServiceService } from './hastag-service.service';

describe('HastagServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HastagServiceService = TestBed.get(HastagServiceService);
    expect(service).toBeTruthy();
  });
});
