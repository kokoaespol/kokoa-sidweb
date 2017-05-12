import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AUTH } from '../../auth';

/*
  Generated class for the SidwebServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SidwebServiceProvider {
  sidwebAPI: string;
  private headers: Headers;
  options: RequestOptions;
  constructor(public http: Http) {
    // this.sidwebAPI = 'https://www.sidweb.espol.edu.ec/api/v1/'; app use this url for development proxy
    this.sidwebAPI = '/sidwebAPI/';
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${AUTH.apiKey}` });
    this.options = new RequestOptions({ headers: this.headers });
    console.log('Hello SidwebService Provider');
  }

  getCourses() {
    return this.http.get(`${this.sidwebAPI}courses`, this.options)
      .map(res => res.json())
  }

}
