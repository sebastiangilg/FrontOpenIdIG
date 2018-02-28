import { TestBed, inject } from '@angular/core/testing';

import { UserAuthenticateServiceService } from './user-authenticate-service.service';

describe('UserAuthenticateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthenticateServiceService]
    });
  });

  it('should be created', inject([UserAuthenticateServiceService], (service: UserAuthenticateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
