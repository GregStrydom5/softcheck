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
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { DashboardInterface } from "../interfaces/dashboard.interface";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  checkSheetCollection: CollectionReference<DocumentData>
  constructor(private db: Firestore) {
    this.checkSheetCollection = collection(this.db, 'checksheets')
  }

  getDashboardData() {
    return collectionData(this.checkSheetCollection, {
      idField: 'id',
    }) as Observable<DashboardInterface[]>
  }

  deleteChecksheet(checksheetId) {
    console.log(`Deleted`)
  }
}
