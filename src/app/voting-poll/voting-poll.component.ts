import { Component } from '@angular/core';
import { PollService } from '../poll.service';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatRadioButton , MatRadioGroup} from '@angular/material/radio'
import { MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-voting-poll',
  standalone: true,
  imports: [CommonModule , FormsModule , MatRadioButton , MatRadioGroup , MatButtonModule],
  templateUrl: './voting-poll.component.html',
  styleUrl: './voting-poll.component.css'
})
export class VotingPollComponent {
  pollId = 0 ;
  options: any[] = [];
  selectedOptionId = 0;

  constructor(private pollService: PollService , private userService : UserService) { }

  pollName = this.pollService.getPollName() ;
  userName = this.userService.getUserName() ;
  // pollId = this.pollService.getPollId() ;

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions() {
    console.log();
    this.pollId = this.pollService.getPollId() ;
    this.pollService.getOptions(this.pollId)
      .subscribe(options => {
        // console.log(options);
        
        this.options = options;
      });
  }

  saveOption() {
    // Here, you can handle saving the selected options, such as sending them to a server or performing any other necessary action
    console.log(this.selectedOptionId);
    this.pollService.saveVote(this.pollId , this.selectedOptionId , this.userName).subscribe((data) => {
      console.log(data);
      
    })
  }
}
