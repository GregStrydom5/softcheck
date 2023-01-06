import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewNote } from "../../../interfaces/viewnote.interface";
import { ChecksheetService } from "../../../services/checksheet.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-connect-section-note',
  templateUrl: './view-connect-section-note.component.html',
  styleUrls: ['./view-connect-section-note.component.css']
})
export class ViewConnectSectionNoteComponent implements OnInit {
  notes: [] = []
  public checksheetId
  public checksheet
  constructor(public dialogRef: MatDialogRef<ViewNote>, @Inject(MAT_DIALOG_DATA) public data: ViewNote, public checksheetService: ChecksheetService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checksheetId = this.route.snapshot.url[1].path
    this.checksheetService.getChecksheetById(this.checksheetId).subscribe((res) => {
      res.forEach((res) => {
        console.log(res['notes'])
      })
    })
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}
