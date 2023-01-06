import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/compat/storage";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  selectedFiles: FileList;
  uploadTask: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

}
