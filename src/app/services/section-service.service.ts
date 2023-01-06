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
import { SectionDetailInterface } from "../interfaces/section_detail.interface";

@Injectable({
  providedIn: 'root'
})
export class SectionServiceService {
  sectionCollection: CollectionReference<DocumentData>
  constructor(private db: Firestore) {
    this.sectionCollection = collection(this.db, 'connectsections')
  }
}
