import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  register=true;
  login= false;
  constructor() { }

  registerView(){
    this.register=true;
    this.login=false;
  }
  logInView(){
    this.register=false;
    this.login=true;

  }



  ngOnInit() {
  }

}
