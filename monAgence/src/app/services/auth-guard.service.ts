import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import firebase from 'firebase';
import 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user: firebase.User) => {
            if (user) {
              console.log("user is connected")
              resolve(true)
            } else {
              console.log("user is disconnected")
              this.router.navigateByUrl('home')
              resolve(false)
            }
          }
        )
      }
    )
  }
}
