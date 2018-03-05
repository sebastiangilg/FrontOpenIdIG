import { Component } from '@angular/core';
import { UserAuthenticateServiceService } from '../../services/user-authenticate/user-authenticate-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})

export class AuthenticateComponent {

  userRequest: string;
  constructor(
    private userAuthenticateServise: UserAuthenticateServiceService,
    private router: Router
  ) {}

  userAuthenticate(user: string, pass: string) {

    this.userRequest = JSON.stringify({
      Usuario : user,
      Contrasena : pass
    });

    this.userAuthenticateServise.UserAuthenticatePost(this.userRequest)
    .subscribe(
      response => {
        alert(response.message);
        localStorage.setItem('transaction', response.transactionMade);
        this.router.navigate(['/register-app']);
      },
      error => alert(error)
    );
  }
}

