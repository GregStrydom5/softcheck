import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userData
  public uid

  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.url[1].path
    this.userService.getUserById(this.uid).subscribe((res) => {
      this.userData = res
    })
  }
}
