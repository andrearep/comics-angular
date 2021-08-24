import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  sub = new Subscription();


  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.isLogged().then(
      loggedIn => this.loggedIn=loggedIn
    )

    this.sub = this.loginService.statusChanged.subscribe(
      (loggedIn: boolean) => (this.loggedIn = loggedIn)
    )
  }


  logOut() {
    this.loginService.logout();
    this.router.navigate(['login'])
  }

}
