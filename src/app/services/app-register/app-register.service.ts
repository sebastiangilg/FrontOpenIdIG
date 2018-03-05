import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppRegisterService {

  private url = '';
  constructor(private http: Http) {}

  AppRegisterPost(appRequest: any): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, appRequest, {headers: headers})
    .map(res => res.json());
  }
}
