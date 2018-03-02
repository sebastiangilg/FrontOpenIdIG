import { Router, CanActivate } from '@angular/router';
import { AuthenticateComponent } from './component/authenticate/authenticate.component';
import { UserAuthenticateServiceService } from './services/user-authenticate/user-authenticate-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizatedGuard implements CanActivate {
  constructor(private router: Router,
              private authenticateComp: AuthenticateComponent,
              private authenticateService: UserAuthenticateServiceService,) {
                alert('ya');
              }

  canActivate() {
    if (this.authenticateComp.validate()) {
      return true;
    }
    this.router.navigate(['/authenticate']);
    return false;
  }
}
