/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChidrenService } from './chidren.service';

describe('ChidrenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChidrenService]
    });
  });

  it('should ...', inject([ChidrenService], (service: ChidrenService) => {
    expect(service).toBeTruthy();
  }));
});
