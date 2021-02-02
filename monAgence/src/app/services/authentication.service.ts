

import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signUpUser(email: string, password: string): Promise<void> {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            console.log("utilisateur créé")
            resolve()
          }
        ).catch(
          (error) => {
            reject(error)
          }
        )
      }
    )
  }


  login(email: string, password: string): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (data) => {
            console.log("connected")
            resolve(data)
          }
        ).catch(
          (error) => {
            reject(error)
          }
        )
      }
    )
  }
}
