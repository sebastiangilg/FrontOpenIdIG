import { Component } from '@angular/core';
import { AppRegisterService } from '../../services/app-register/app-register.service';

@Component({
  selector: 'app-register-app',
  templateUrl: './register-app.component.html',
  styleUrls: ['./register-app.component.css']
})

export class RegisterAppComponent {

  postData: string;
  constructor(private appRegisterService: AppRegisterService) {}

  AppRegister(App: string, Desc: string, Owner1: string, Owner2: string) {
    const parms = JSON.stringify({
      AppName : App,
      DescApp : Desc,
      Owner: [ Owner1, Owner2 ]
    });

    this.appRegisterService.AppRegisterPost(parms)
    .then(mensage => {this.postData = mensage; }).catch(mensage => {this.postData = mensage; });
  }
}
