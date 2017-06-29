import { Injectable } from '@angular/core';
import * as feathers from 'feathers/client';
import * as rest from 'feathers-rest/client';
import * as hooks from 'feathers-hooks';
import * as errors from 'feathers-errors';
import * as auth from 'feathers-authentication-client';
import * as superagent from 'superagent';

@Injectable()
export class AuthService {
  feathersClient: any
  constructor() {
    this.feathersClient = feathers();

    this.feathersClient.configure(hooks())
      .configure(rest('http://localhost:3030').superagent(superagent))
      .configure(auth({ storage: localStorage }));

  }

  login(email: string, password: string) {
    return this.feathersClient.authenticate({
      strategy: 'local',
      email: email,
      password: password
    })
  }

  logout() {
    return this.feathersClient.logout()
  }


  isLogged() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem("feathers-jwt")) {
        this.feathersClient.passport.verifyJWT(localStorage.getItem("feathers-jwt"))
        .then(payload=>{
          resolve(true);
        }).catch(error=>{
          resolve(false);
        });
      }
      else{
        resolve(false);
      }
    })

  }

  getUser() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem("feathers-jwt")) {
        this.feathersClient.passport.verifyJWT(localStorage.getItem("feathers-jwt"))
          .then(payload => {
            return this.feathersClient.service('users').get(payload.userId);
          }).then(user => {
            resolve(user);
          }).catch(error => {
            reject(error)
          })
      } else {
        reject()
      }

    })

  }
}
