import { TestBed } from '@angular/core/testing';

import { NgTestServiceService } from './ng-test-service.service';

describe('NgTestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTestServiceService = TestBed.get(NgTestServiceService);
    expect(service).toBeTruthy();
  });
});
