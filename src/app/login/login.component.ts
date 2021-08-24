import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email] ),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

}
