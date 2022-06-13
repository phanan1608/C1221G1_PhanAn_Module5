import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSubmit = false;
  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword:new FormControl("",[Validators.required, Validators.minLength(6)]),
    country:new FormControl("",[Validators.required]),
    age:new FormControl("",[Validators.required,Validators.min(18)]),
    gender:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required,Validators.pattern("^\\+84\\d{9,10}$")])
  },[this.passwordConfirming]);

  passwordConfirming(password: AbstractControl) {
    if (password.get('password').value !== password.get('confirmPassword').value) {
      return {invalid: true};
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmit = true;
    console.log(this.registerForm);
    if (this.registerForm.valid){
      this.isSubmit = false;

    }
  }
}
