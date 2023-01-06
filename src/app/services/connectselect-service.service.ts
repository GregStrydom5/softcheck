import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

@Injectable({
  providedIn: 'root',
})
export class SelectConnectService {
  checkSheetCollection: CollectionReference<DocumentData>

  constructor(private db: Firestore) {

  }
}
