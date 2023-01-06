import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Flags to show whether the month should be displayed in the list or not.
  showDates = { 0: false, 1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: true, 11: false
  }

  public mystring = 'cool dog'

  constructor() { }

  ngOnInit(): void {
    console.log(this.mystring.toUpperCase())
  }
}
