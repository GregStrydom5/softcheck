import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  sendResetEmail(email: string) {

  }

}
