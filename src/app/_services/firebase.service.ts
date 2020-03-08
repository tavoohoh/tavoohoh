import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
  ) { }

  /**
   * emma: save undefined command
   */
  async addUnknownCommand(command: string) {
    return new Promise<any>((res, rej) => {
      this.db.collection('emmaUnknown').add({
        commandLine: command,
        date: new Date()
      }).then(
        dat => res(dat),
        err => rej(err)
      );
    });
  }

}
