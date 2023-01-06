import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-connect-select',
  templateUrl: './connect-select.component.html',
  styleUrls: ['./connect-select.component.css']
})
export class ConnectSelectComponent implements OnInit {
  public checksheetId

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checksheetId = this.route.snapshot.url[1].path
  }
}
