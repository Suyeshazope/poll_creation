import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField , MatLabel} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-poll',
  standalone: true,
  imports: [MatFormField ,MatLabel , MatButtonModule, MatInputModule , MatIcon , FormsModule ,CommonModule , ReactiveFormsModule],
  templateUrl: './create-poll.component.html',
  styleUrl: './create-poll.component.css'
})
export class CreatePollComponent {

  // optionString = '';

  constructor(private router: Router, private pollService: PollService , private userService : UserService) {}

  options = [{ text: '' }] ;
  msg = false
  poll = {
    userName : this.userService.getUserName() ,
    pollName: '',
    optionName : ['']
  };

  createPoll() {
    // Call the service method to create a new poll
    this.poll.optionName = this.options.map(option => option.text);

    if(this.poll.userName.length != 0 && this.poll.pollName.length != 0 && this.poll.optionName.length != 0){
      this.pollService.createPoll(this.poll).subscribe(
        (response) => {
          console.log('Poll created successfully:', response);
          // Redirect to the poll list
          // this.router.navigate(['/polls']);
          if(this.poll.userName.length != 0 && this.poll.pollName != null && this.poll.optionName != null){
            this.msg = true ;
            setTimeout(() => {
              this.router.navigateByUrl('home/polloption/created-polls');
            }, 1500);
          }
        },
        (error) => {
          console.error('Error creating poll:', error);
          // Handle error
        }
      );
    }
  }


  addOption() {
    this.options.push({ text: '' });
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }
}
