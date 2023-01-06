import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-platform-select',
  templateUrl: './platform-select.component.html',
  styleUrls: ['./platform-select.component.css']
})
export class PlatformSelectComponent implements OnInit {
  public checksheetId

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checksheetId = this.route.snapshot.url[1].path
  }
}
