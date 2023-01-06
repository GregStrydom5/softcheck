import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChecksheetService } from "../../../services/checksheet.service";

@Component({
  selector: 'app-view-checksheet',
  templateUrl: './view-checksheet.component.html',
  styleUrls: ['./view-checksheet.component.css']
})
export class ViewChecksheetComponent implements OnInit {
  public checksheetId
  public checksheetData
  public checksheetRegistration = []
  constructor(private route: ActivatedRoute, public checksheetService: ChecksheetService) { }

  ngOnInit(): void {
    this.checksheetId = this.route.snapshot.url[1].path;
    this.checksheetService.getChecksheetById(this.checksheetId).subscribe((res) => {
      console.log(`Res: ${res}`)
      this.checksheetData = res
    })

    this.getConnectRegistration().then((res) => {
      res.forEach((doc) => {
        if (doc.data()['checksheetId'] === this.checksheetId) {
          this.checksheetRegistration.push(doc.data())
        }
      })
    })
    this.checksheetRegistration.reverse()
  }

  async getConnectRegistration() {
    return this.checksheetService.getConnectSectionCollection('registration');
  }

  readCheck() {
    return false
  }
}
