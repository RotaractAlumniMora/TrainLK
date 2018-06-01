import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  urlAddUser = "http://18.191.123.53:8080/ws-mapmytrain/v1/C461D3C23C7E7264726A8D1DD5E/getroutestations"

  userId;

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello UserProvider Provider');
  }

  addUser(name: string) {
    return this.http.post(this.urlAddUser, { 'name': name }, httpOptions);
  }
}
