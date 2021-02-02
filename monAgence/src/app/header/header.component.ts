import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarTitle = "AgenceImmo"
  connected: boolean = false

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user: firebase.User) => {
        if (user) {
          console.log("user is connected")
          this.connected = true
        } else {
          console.log("user is disconnected")
          this.connected = false
        }
      }
    )
  }

  logOut() {
    console.log("logout");
    this.authenticationService.logOut()
  }
}
