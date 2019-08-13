import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private user: User;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
    ) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  async login(username: string, password: string) {
    console.log(username, password);

    const email = username + '@gmail.com';

    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        console.log(res);
        this.router.navigate(['espacio/shuttle']);
      },
      err => {
        console.error('unable to login:', err);
      });

  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

}
