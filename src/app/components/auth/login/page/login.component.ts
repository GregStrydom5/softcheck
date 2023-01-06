import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ]
    });
  }

  login() {
    let email = this.loginForm.value['email']
    let password = this.loginForm.value['password']
    this.authService.loginUser(email, password).then(res => {
      console.log(res);
      this.router.navigate(['/dashboard']).then();
    });
  }
}
