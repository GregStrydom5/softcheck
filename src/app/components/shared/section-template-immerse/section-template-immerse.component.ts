import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChecksheetService} from "../../../services/checksheet.service";
import {MatDialog} from "@angular/material/dialog";
import { AddSectionNoteComponent } from "../add-section-note/add-section-note.component";
import { ViewConnectSectionNoteComponent } from "../view-connect-section-note/view-connect-section-note.component";

@Component({
  selector: 'app-section-template-immerse',
  templateUrl: './section-template-immerse.component.html',
  styleUrls: ['./section-template-immerse.component.css']
})
export class SectionTemplateImmerseComponent implements OnInit {
  public checksheetId
  public section
  public sectionContent
  public sectionId
  public totalSectionCount = 14
  public note
  public dateCreated
  public createdBy

  constructor(public route: ActivatedRoute, public checksheetService: ChecksheetService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.checksheetId = this.route.snapshot.url[1].path
    this.section = this.route.snapshot.url[2].path
    this.sectionId = this.route.snapshot.url[3].path

    this.getSectionContent().then((res) => {
      console.log(res)
    })
  }

  async getSectionContent() {
    return this.checksheetService.getConnectSectionCollection('registration');
  }

  updateConnectPC(checksheetId, event) {
    console.log(`ChecksheetID: ${checksheetId}`)
    console.log(`Event: ${event}`)
    // this.checksheetService.updateConnectPC(checksheetId, event)
  }

  updateConnectMac(event) {
    // this.checksheetService.updateConnectMac()
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
