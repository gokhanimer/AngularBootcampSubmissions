import { TestBed } from '@angular/core/testing';

import { OrganicrouteService } from './organicroute.service';

describe('OrganicrouteService', () => {
  let service: OrganicrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganicrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
