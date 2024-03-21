import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { PollService } from '../poll.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-poll',
  standalone: true,
  imports: [MatCard , MatRadioButton , MatRadioGroup , MatButtonModule , FormsModule , CommonModule],
  templateUrl: './update-poll.component.html',
  styleUrl: './update-poll.component.css'
})
export class UpdatePollComponent {
  pollId = 0 ;
  options: any[] = [];
  selectedOptionId = 0;
  msg = false ;

  constructor(private pollService: PollService , private userService : UserService , private router : Router) { }

  pollName = this.pollService.getPollName() ;
  userName = this.userService.getUserName() ;
  optionId1 = this.pollService.getOptionId() ;
  // pollId = this.pollService.getPollId() ;

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions() {
    console.log(this.optionId1);
    this.pollId = this.pollService.getPollId() ;
    this.pollService.getOptions(this.pollId)
      .subscribe(options => {
        // console.log(options);
        
        this.options = options;
      });
  }

  updateOption() {
    // Here, you can handle saving the selected options, such as sending them to a server or performing any other necessary action
    console.log(this.selectedOptionId);
    this.pollService.updateVote(this.pollId , this.selectedOptionId , this.userName).subscribe((data) => {
      // console.log(data);
      this.msg = true;
      setTimeout(() => {
        this.router.navigateByUrl('home/polloption/voted-polls')
      }, 1500);
    })
  }

}
