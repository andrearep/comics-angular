import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logged= false;
  statusChanged= new Subject<boolean>();

  constructor() {

  }

  isLogged() {
  const  promise = new Promise<boolean>((resolve) => {
      resolve(this.logged);
    });
    return promise;
  }

  login() {
    this.logged = true;
    this.statusChanged.next(this.logged);
  }

  logout() {
    this.logged = false;
    this.statusChanged.next(this.logged);
  }


}
