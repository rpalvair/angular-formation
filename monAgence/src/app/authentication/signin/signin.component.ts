import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.initSigninForm()
  }


  initSigninForm() {
    this.signinForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  async onSubmit() {
    console.log("form", this.signinForm.value)
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    try {
      await this.authenticationService.signUpUser(email, password)
    } catch (e) {
      console.log("error", e)
    }
  }
}
