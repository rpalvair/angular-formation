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
      authDomain: "monagence-15ac2.firebaseapp.com",
      projectId: "monagence-15ac2",
      storageBucket: "monagence-15ac2.appspot.com",
      messagingSenderId: "400618735910",
      appId: "1:400618735910:web:0f39b4ff994e30f2ec59e7"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
