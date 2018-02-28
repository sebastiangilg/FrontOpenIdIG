import { Component } from '@angular/core';
import { UserAuthenticateServiceService } from '../../services/user-authenticate/user-authenticate-service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})

export class AuthenticateComponent {

  postData: string;
  constructor(private userAuthenticateServise: UserAuthenticateServiceService) {}

  userAuthenticate(user: string, pass: string) {
    const parms = JSON.stringify({
      Usuario : user,
      Contrasena : pass
    });

    this.userAuthenticateServise.UserAuthenticatePost(parms)
    .then(mensage => {this.postData = mensage; }).catch(mensage => {this.postData = mensage; });
  }
}
