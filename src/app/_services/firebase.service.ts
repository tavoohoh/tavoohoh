import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
  addUnknownCommand(command: string) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('emmaUnknown').add({
        commandLine: command
      })
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

}
