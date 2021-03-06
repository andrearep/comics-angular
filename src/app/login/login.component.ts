import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email] ),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    this.loginService.login();
    this.router.navigate(['comics']);
  }

}
