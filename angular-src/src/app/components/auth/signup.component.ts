import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {User} from "./auth.model";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm : FormGroup;
  constructor(private authService: AuthService) { }

  onSubmit(){
    const user = new User(this.myForm.value.email,
        this.myForm.value.password,
        this.myForm.value.name,
        this.myForm.value.number
        //dodać auth.signup(user)
    );

  }

  ngOnInit() {
    this.myForm= new FormGroup({
        name: new FormControl(null),
        number: new FormControl(null),
        email: new FormControl(null, [Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]),
        password: new FormControl(null, Validators.required)



    });
  }

}
