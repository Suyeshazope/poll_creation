import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon' ;
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [MatButtonModule , MatFormFieldModule , MatIcon , MatInputModule , FormsModule , ReactiveFormsModule , HeaderComponent],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  // userName = '' ;
  // password = '' ;
  userName = new FormControl('') ;
  password = new FormControl('') ;
  // email1 = ''
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true ;

  constructor(private userService : UserService , private router : Router){} 

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login') ;
  }

  addUser(){
    const emailValue: string = this.email.value || '';
    const userName: string = this.userName.value || '';
    const password: string = this.password.value || ''; 
    this.userService.adduser(userName, password , emailValue).subscribe(
      (response) => {
        console.log(response);
        console.log(typeof (response));

        this.userService.setUserName(response.userName) ;

        if (response.userName != null) {
          this.router.navigateByUrl('/home');
        }
      }, (error) => {
        console.log(error);
      }
    )
  }
}
