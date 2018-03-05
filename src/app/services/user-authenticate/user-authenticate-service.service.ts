import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserAuthenticateServiceService {

  private url = 'http://localhost:1915/api/UserAuthenticate/Authenticate';

  private postData;
  constructor(private http: Http) { }

  UserAuthenticatePost(parms: any): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, parms, {headers: headers})
    .map(response => response.json());
  }
}
