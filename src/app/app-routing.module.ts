import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './component/authenticate/authenticate.component';
import { RegisterAppComponent } from './component/register-app/register-app.component';
import { AuthorizatedGuard } from './app.guard';


const routes: Routes = [
  { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
  { path: 'authenticate', component: AuthenticateComponent},
  { path: 'register-app', component: RegisterAppComponent, canActivate: [AuthorizatedGuard] }
];

export const Routing = RouterModule.forRoot(routes);
