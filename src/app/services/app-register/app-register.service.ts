import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppRegisterService {

  private url = '';
  constructor(private http: Http) { }

  AppRegisterPost(parms: any): Promise<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.url, parms, {headers: headers})
      .toPromise()
      .then(res => {
        resolve(res.json()[0].Texto);
        })
      .catch(res => {
        reject(res);
        });
    });
    return promise;
  }
}
