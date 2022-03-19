import { TestBed } from '@angular/core/testing';

import { MealApiHandlerService } from './meal-api-handler.service';

describe('MealApiHandlerService', () => {
  let service: MealApiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealApiHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
