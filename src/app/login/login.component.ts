import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  login() {
    // this.afAuth.auth.signInWithRedirect(new firebase.GithubAuthProvider());
    const googleAuthProvider = new firebase.GithubAuthProvider();
    this.afAuth.auth.signInWithRedirect(googleAuthProvider);
  }
}
