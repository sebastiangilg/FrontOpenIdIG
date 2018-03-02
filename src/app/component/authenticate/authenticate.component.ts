import { Component } from '@angular/core';
import { UserAuthenticateServiceService } from '../../services/user-authenticate/user-authenticate-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})

export class AuthenticateComponent {

  postData: number;
  public userRequest: string;
  constructor(private userAuthenticateServise: UserAuthenticateServiceService,
              private router: Router ) {  }

  userAuthenticate(user: string, pass: string) {
    this.userRequest = JSON.stringify({
      Usuario : user,
      Contrasena : pass
    });

    //  this.userAuthenticateServise.Auth(this.userRequest);
    this.userAuthenticateServise.UserAuthenticatePost(this.userRequest)
      .then(mensage => {this.postData = mensage; })
      .then(() => {
        if (this.postData === 100) {
          this.router.navigate(['/register-app']);
        } else {
          this.router.navigate(['/authenticate']);
        }
        alert('data Auth' + this.postData);
        });
  }

  validate(): boolean {
    alert('data Validate' + this.postData);
    return this.postData === 100 ? true : false;
  }
}
