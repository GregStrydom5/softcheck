import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { UserService } from '../../../services/user.service';

import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map, Observable} from "rxjs";
import { DashboardInterface } from "../../../interfaces/dashboard.interface";
import { UserInterface } from "../../../interfaces/user.interface";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DashboardSelectComponent } from "../dashboard-select/dashboard-select.component";

@Component({
  selector: 'app-dashboard-month-rows',
  templateUrl: './dashboard-month-rows.component.html',
  styleUrls: ['./dashboard-month-rows.component.css']
})
export class DashboardMonthRowsComponent implements OnInit {
  public testersAssigned = []
  public testerImages = []
  public checksheetId
  public testerId
  public testerList = []
  checkSheets: DashboardInterface[] = []
  users: UserInterface[] = []

  constructor(private dashboardService: DashboardService, private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe((res: DashboardInterface[]) => {
      this.checkSheets = res

      console.log(this.checkSheets)

      for (let y = 0; y < this.checkSheets.length; y++) {
        this.testersAssigned.push(this.checkSheets[y].testersUID)
      }

      this.userService.getAllusers().subscribe((res: UserInterface[]) => {
        for (let x = 0; x < this.testersAssigned.length; x++) {
          if (res[x].uid === this.testersAssigned[x][0]) {
            let userImg = new Image();
            const firstL = res[x].firstName.charAt(0);
            userImg.src = `https://ui-avatars.com/api/?background=random&rounded=true&name=${res[x]['firstName']}+${res[x]['lastName']}`
            this.testerImages.push(userImg);
          }
        }
      })
    })
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DashboardSelectComponent, dialogConfig);
  }

  getCompleteColors() {

  }

  deleteChecksheet(checksheetId): void {

  }
}
