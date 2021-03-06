import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {User} from "./auth.model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService) { }


  onSubmit(){
    const user= new User(this.myForm.value.email, this.myForm.value.password);
    // authservice
  }

  ngOnInit() {
    this.myForm= new FormGroup({
      email: new FormControl(null, [Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, [Validators.required])
    });
  }

}
