import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {
  public titlePlatform;
  public titleSection;

  constructor() { }

  ngOnInit(): void {
    this.titlePlatform = 'IMMERSE';
    this.titleSection = "LAUNCHER";
  }

}
