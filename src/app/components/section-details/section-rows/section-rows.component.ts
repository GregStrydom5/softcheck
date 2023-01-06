import {Component, Input, OnInit} from '@angular/core';

import { ChecksheetService } from "../../../services/checksheet.service";

import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map, Observable} from "rxjs";
import { SectionDetailInterface } from "../../../interfaces/section_detail.interface";

@Component({
  selector: 'app-section-rows',
  templateUrl: './section-rows.component.html',
  styleUrls: ['./section-rows.component.css']
})
export class SectionRowsComponent implements OnInit {
  @Input() sectionName: string | undefined;

  constructor(private checkSheetService: ChecksheetService) { }

  sectionDetailsCollection: AngularFirestoreCollection<any>;
  sectionDetailsObservable: Observable<SectionDetailInterface[]>;

  ngOnInit(): void {
    // this.getData(this.sectionName);
  }

  // getData(sectionName) {
  //   // Get the section to test EG: Registration, Launcher
  //   this.sectionDetailsCollection = this.checkSheetService.getSectionDetails(sectionName);
  //   this.sectionDetailsObservable = this.sectionDetailsCollection.snapshotChanges().pipe(map(arr => {
  //     return arr.map(snap => {
  //       const data = snap.payload.doc.data();
  //       const id = snap.payload.doc.id;
  //       return { id, ...data};
  //     })
  //   }))
  // }

  updateWorking(value: boolean) {
    this.checkSheetService.updateWorking(value);
  }
}
