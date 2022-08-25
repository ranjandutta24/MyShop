import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import * as firebase from 'firebase/app';
// import { firebase } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  login() {
    console.log(`object`);

    // const googleAuthProvider = new firebase.GithubAuthProvider();
    this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }
}
