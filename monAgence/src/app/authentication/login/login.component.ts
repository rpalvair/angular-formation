import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  onSubmit() {
    console.log("form", this.loginForm.value)
    const email = this.loginForm.get('email').value
    const password = this.loginForm.get('password').value
    this.authenticationService.login(email, password).then(
      (data) => {
        console.log("data user", data)
        console.log("email connected user", data.user.email)
        this.router.navigateByUrl("admin/dashboard")
      }
    ).catch(
      (error) => {
        console.log("error", error)
      }
    )

  }
}
