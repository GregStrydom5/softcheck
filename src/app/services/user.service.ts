import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from "../interfaces/user.interface";
import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersCollection: CollectionReference<DocumentData>
	constructor(private db: Firestore) {
    this.usersCollection = collection(this.db, 'users')
  }

	getAllusers(): Observable<UserInterface[]> {
    return collectionData(this.usersCollection, {
      idField: 'id',
    }) as Observable<UserInterface[]>
	}

	getUserById(id: string) {
    const userDocumentReference = doc(this.db, `users/${id}`)
    return docData(userDocumentReference, {idField: 'uid'}) as Observable<UserInterface[]>
  }

  // createNewUser(user: User) {
  //   return addDoc(this.usersCollection, user)
  // }

  deleteUser(id: string) {
    const userDocumentReference = doc(this.db, `user/${id}`)
    return deleteDoc(userDocumentReference)
  }

  // updateUser(user: User) {
  //   const userDocumentReference = doc(
  //     this.db,
  //     `user/${user})`
  //   )
  //   return updateDoc(userDocumentReference, { ...user });
  // }
}
