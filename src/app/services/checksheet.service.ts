import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  where,
  query,
  getDocs
} from '@firebase/firestore';
import {Firestore, collectionData, docData, setDoc} from '@angular/fire/firestore';
import { Observable } from "rxjs";

import { ChecksheetInterface } from "../interfaces/checksheet.interface";
import { Connectregistration } from "../interfaces/connectregistration.interface";

@Injectable({
  providedIn: 'root',
})
export class ChecksheetService {
  checksheetCollection: CollectionReference<DocumentData>
  connectRegistrationCollection: CollectionReference<DocumentData>
  public checksheet
  constructor(private db: Firestore) {
    this.checksheetCollection = collection(this.db, "checksheets")
    this.connectRegistrationCollection = collection(this.db, 'connectregistration')
  }

  getSectionDetails(sectionName: string) {
    console.log('Section name is ' + sectionName);
    // return this.db.collection(sectionName);
  }

  async getCheckSheets() {
    return collectionData(this.checksheetCollection, {
      idField: 'id',
    }) as Observable<ChecksheetInterface[]>
  }

  getChecksheetById(id: string) {
    const checksheetDocumentReference = doc(this.db, `checksheets/${id}`)
    return docData(checksheetDocumentReference, {idField: 'id'}) as Observable<ChecksheetInterface[]>
  }

  updateWorking(value: boolean) {
    //
  }

  async checkIfChecksheetExists(sheetName) {
    console.log('Checking...')
    const sheets = await this.getCheckSheets()
    sheets.subscribe((res) => {
      if (res.length === undefined) {
        return res[0].name !== sheetName;
      } else {
        for (let x = 0; x < res.length; x++) {
          if (res[x].name !== undefined) {
            return res[x].name !== sheetName;
          }
        }
        return false
      }
    })
  }

  getConnectSectionCollection(section: string) {
    if (section === 'registration') {
      return getDocs(this.connectRegistrationCollection)
    } else if (section === 'companysetup') {
      return []
    } else {
      return []
    }
  }

  // async getConnectSectionById(checksheetId: string, sectionId: number, section: string) {
  //   if (section === 'registration') {
  //     await getDocs(this.connectRegistrationCollection).then((res) => {
  //       res.forEach((doc) => {
  //         if (doc.data()['sectionId'] === sectionId && doc.data()['checksheetId'] === checksheetId) {
  //           return doc.data()
  //         } else {
  //           return false
  //         }
  //       })
  //     })
  //   }
  // }

  addChecksheet(form, icons, uids) {
    const uIcons = []
    icons.forEach((icon) => {
      uIcons.push(icon.src)
    })
    const data = {
      name: form.value.name,
      bugDoc: form.value.bugDoc,
      completed: false,
      connectVersion: form.value.connectVersion,
      immerseVersion: form.value.immerseVersion,
      dateCreated: Date.now(),
      eventLink: form.value.eventLink,
      numIssues: 0,
      percentComplete: '0',
      testerIcons: uIcons,
      testerUids: uids,
      id: 'erseffw3f3w0fw3nfow3fnw3'
    }
    const checksheetsRef = collection(this.db, 'checksheets')
    return addDoc(checksheetsRef, data)
  }

  updateConnectPC(checksheet: ChecksheetInterface, value: boolean) {
    const checkDocRef = doc(this.db, `checksheets/${checksheet}`)
    return updateDoc(checkDocRef, {pc: value})
  }

  updateConnectMac(checksheet: ChecksheetInterface, value: boolean) {
    const checkDocRef = doc(this.db, `checksheets/${checksheet}`)
    return updateDoc(checkDocRef, {mac: value})
  }

  updateImmersePC() {

  }

  updateImmerseMac() {

  }

  updateConnectChrome() {

  }

  updateConnectEdge() {

  }

  updateConnectFirefox() {

  }

  updateConnectOpera() {

  }

}
