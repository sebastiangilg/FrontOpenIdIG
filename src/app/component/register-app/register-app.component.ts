import { Component } from '@angular/core';
import { AppRegisterService } from '../../services/app-register/app-register.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-app',
  templateUrl: './register-app.component.html',
  styleUrls: ['./register-app.component.css']
})

export class RegisterAppComponent {

  postData: string;
  appRequest: string;
  constructor(
    private appRegisterService: AppRegisterService,
    private route: ActivatedRoute
  ) {}

  AppRegister(App: string, Desc: string, Owner1: string, Owner2: string) {
    const appRequest = JSON.stringify({
      AppName : App,
      DescApp : Desc,
      Owner: [ Owner1, Owner2 ]
    });

    this.appRegisterService.AppRegisterPost(this.appRequest)
    .subscribe(
      response => {
        this.postData = response.message;
      },
      error => alert(error)
    );
  }
}
