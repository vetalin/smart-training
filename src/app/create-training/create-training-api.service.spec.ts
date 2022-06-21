import { TestBed } from '@angular/core/testing';

import { CreateTrainingApiService } from './create-training-api.service';

describe('CreateTrainingApiService', () => {
  let service: CreateTrainingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTrainingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
