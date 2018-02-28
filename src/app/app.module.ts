import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './component/authenticate/authenticate.component';
import { RegisterAppComponent } from './component/register-app/register-app.component';
import { HttpModule } from '@angular/http';
import { UserAuthenticateServiceService } from './services/user-authenticate/user-authenticate-service.service';
import { AppRegisterService } from './services/app-register/app-register.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    RegisterAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserAuthenticateServiceService, AppRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
