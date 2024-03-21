import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule, HeaderComponent , CommonModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName = new FormControl('' , [Validators.required]) ;
  password = new FormControl('' , [Validators.required]) ;
  constructor(private userService: UserService, private router: Router) { }
  hide = true;
  valid = false ;
  msg = '' ;

  navigateToSignUp() {
    this.router.navigateByUrl('/newuser');
  }

  login() {
    const userName: string = this.userName.value || '';
    const password: string = this.password.value || ''; 

    if(userName == null || password == null || userName.trim() === '' || password.trim() === ''){
      this.valid = true ;
      this.msg = "Username and password are required fields."
      return ;
    }

    this.userService.login(userName, password).subscribe(
      (response) => {
        console.log(response);
        // console.log(typeof (response));
        // console.log(response.userName);
        

        this.userService.setUserName(response.userName) ;

        if (response.userName != null) {
          this.router.navigateByUrl('/home');
        }
        else {
          this.valid = true;
          this.msg = 'Invalid Credentials...'
        }
      }, (error) => {
        this.valid = true;
        this.msg = 'Invalid Credentials...'
        console.log(error);
      }
    )
  }
}
