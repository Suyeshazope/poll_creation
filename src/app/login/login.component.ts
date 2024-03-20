import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule, HeaderComponent , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName = '';
  password = '';
  constructor(private userService: UserService, private router: Router) { }
  hide = true;
  valid = false ;

  navigateToSignUp() {
    this.router.navigateByUrl('/newuser');
  }

  login() {
    this.userService.login(this.userName, this.password).subscribe(
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
        }
      }, (error) => {
        console.log(error);
      }
    )
  }
}
