import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class EspacioService {
  user: User;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  public login(username: string, password: string) {
    console.log(username, password);

    const email = username + '@gmail.com';

    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      res => {
        console.log(res);
        this.router.navigate(['espacio/shuttle']);
      },
      err => {
        console.error('unable to login:', err);
      });
    // const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }



}
