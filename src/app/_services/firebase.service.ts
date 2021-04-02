import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore
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
