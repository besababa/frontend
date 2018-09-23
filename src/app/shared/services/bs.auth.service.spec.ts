import { TestBed, inject } from '@angular/core/testing';

import { BsAuthService } from 'shared/services/bs.auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BsAuthService]
    });
  });

  it('should ...', inject([BsAuthService], (service: BsAuthService) => {
    expect(service).toBeTruthy();
  }));
});
