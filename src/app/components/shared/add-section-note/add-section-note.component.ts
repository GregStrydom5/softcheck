import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddNote } from "../../../interfaces/addnote.interface";

@Component({
  selector: 'app-add-connect-section-note',
  templateUrl: './add-section-note.component.html',
  styleUrls: ['./add-section-note.component.css']
})
export class AddSectionNoteComponent implements OnInit {
  public noteTitle

  constructor(public dialogRef: MatDialogRef<AddNote>, @Inject(MAT_DIALOG_DATA) public data: AddNote,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
