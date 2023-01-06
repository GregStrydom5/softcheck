import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ChecksheetService } from "../../../services/checksheet.service";

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { AddNote } from "../../../interfaces/addnote.interface";
import { AddSectionNoteComponent } from "../add-section-note/add-section-note.component";
import { ViewConnectSectionNoteComponent } from "../view-connect-section-note/view-connect-section-note.component";

@Component({
  selector: 'app-section-template',
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.css']
})
export class SectionTemplateComponent implements OnInit {
  public checksheetId
  public section
  public sectionContent
  public sectionId
  public totalSectionCount = 14
  public note
  public dateCreated
  public createdBy

  constructor(public route: ActivatedRoute, public router: Router, public checksheetService: ChecksheetService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.checksheetId = this.route.snapshot.url[1].path
    this.section = this.route.snapshot.url[2].path
    this.sectionId = this.route.snapshot.url[3].path

    this.getSectionContent(this.section).then((res) => {
      res.forEach((doc) => {
        if (doc.data()['sectionId'] === this.sectionId && doc.data()['checksheetId'] === this.checksheetId) {
          this.sectionContent = doc.data()
        }
      })
    })
  }

  async getSectionContent(section) {
    return this.checksheetService.getConnectSectionCollection(section);
  }

  updateConnectFirefox(event) {
    this.checksheetService.updateConnectFirefox()
  }

  updateConnectChrome(event) {
    this.checksheetService.updateConnectChrome()
  }

  updateConnectOpera(event) {
    this.checksheetService.updateConnectOpera()
  }

  updateConnectEdge(event) {
    this.checksheetService.updateConnectEdge()
  }

  updateConnectPC(checksheetId, event) {
    console.log(`ChecksheetID: ${checksheetId}`)
    console.log(`Event: ${event}`)
    // this.checksheetService.updateConnectPC(checksheetId, event)
  }

  updateConnectMac(event) {
    // this.checksheetService.updateConnectMac()
  }

  goToNextOrPrevious(id) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`test-connect/${this.checksheetId}/registration/${id}`])
    });
  }

  addNote() {
    const dialogRef = this.dialog.open(AddSectionNoteComponent, {
      data: {note: this.note, checksheetId: this.checksheetId, dateCreated: this.dateCreated, createdBy: this.createdBy}
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
    });
  }

  viewNotes() {
    const dialogRef = this.dialog.open(ViewConnectSectionNoteComponent, {
      data: {note: this.note, checksheetId: this.checksheetId, dateCreated: this.dateCreated, createdBy: this.createdBy}
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
    });
  }
}
