import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userUID

  constructor(private authService: AuthService, public afAuth: AngularFireAuth, private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.afAuth.authState.subscribe((res) => {
      this.userUID = res.uid
    })
  }

  onToggleSidenav() {

  }

  onLogout() {
    this.authService.logout();
  }
}
