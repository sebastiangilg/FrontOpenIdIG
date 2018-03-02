import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()
export class UserAuthenticateServiceService {

  private url = 'http://localhost:1915/api/UserAuthenticate/Authenticate';

  private postData;
  constructor(private http: Http, private router: Router ) { }

  UserAuthenticatePost(parms: any): Promise<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.url, parms, {headers: headers})
      .toPromise()
      .then(res => {
        resolve(res.json().codeResponse);
        })
      .catch(res => {
        reject(res);
        });
    });
    return promise;
  }
/*
  Auth(par: any) {
    this.UserAuthenticatePost(par)
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
*/
}
