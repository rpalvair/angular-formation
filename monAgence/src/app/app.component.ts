import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Agence';


  constructor() {
    const firebaseConfig = {
      apiKey: "",
      authDomain: "monagence-fa8b4.firebaseapp.com",
      databaseURL: "https://monagence-fa8b4-default-rtdb.firebaseio.com",
      projectId: "monagence-fa8b4",
      storageBucket: "monagence-fa8b4.appspot.com",
      messagingSenderId: "707981701536",
      appId: "1:707981701536:web:9c6d5395b001b605b3b4c5"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
