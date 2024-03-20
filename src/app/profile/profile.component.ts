import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCard ,MatButtonModule, MatLabel , MatCardHeader ,MatIcon , MatIconButton, MatCardContent , MatCardActions , MatFormField , MatCardTitle , FormsModule, CommonModule , ReactiveFormsModule , MatFormFieldModule , MatInputModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  constructor(private userService : UserService){}
  ngOnInit(): void {
    this.getUserInfo() ;
  }

  // userName = new FormControl('') ;
  password = '' ;
  userName = this.userService.getUserName() ;
  email = '';
  hide = true ;
  saveButton = false ;

  getUserInfo(){
    // let userName = this.userService.getUserName();
    this.userService.getUserInfo(this.userName).subscribe(
      (response) => {
        console.log(response);
        // console.log(typeof (response));
        // console.log(response.userName);
        this.password = response.password ;
        this.email = response.email ;
        
      }, (error) => {
        console.log(error);
      }
    )
  }

  changeButton(){
    this.saveButton = true ;
  }

  updateProfile() {
    // const userName: string = this.userName.value || '';
    this.userService.updateProfile(this.userName , this.email , this.password).subscribe((res) => {
      console.log(res); 
      this.saveButton = false ; 
    })  
  }
}
