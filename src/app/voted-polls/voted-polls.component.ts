import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Init } from 'v8';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-voted-polls',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './voted-polls.component.html',
  styleUrl: './voted-polls.component.css',
})
export class VotedPollsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private pollService: PollService
  ) {}

  ngOnInit(): void {
    this.getVotedPolls();
  }
  userName = '';
  
  pollDetail: any[] = [];
  votedOptionId: number = 0;
  getVotedPolls() {
    this.userName = this.userService.getUserName();
    this.pollService.getVotedPolls(this.userName).subscribe((data) => {
      // console.log(data);
      // we have data[i].optionId && data[i].pollId

      for (let i = 0; i < data.length; i++) {
        this.pollService.getOptions(data[i].pollId).subscribe((res) => {
          // console.log(res);
          for (let j = 0; j < res.length; j++) {
            if (res[j].optionId == data[i].optionId) {
              // console.log(res[j]);
              
              let optionAndPollName = {
                pollName: res[j].pollId.pollName,
                optionName: res[j].optionName,
                optionId: res[j].optionId,
                active: res[j].pollId.active,
                pollId: res[j].pollId.pollId
            };
            
            this.pollDetail.push(optionAndPollName);
            }
          }
      //     console.log("-----------------");
      // console.log("voted polls length = "+this.pollDetail.length);
      // for(let k = 0 ; k < this.pollDetail.length ; k++){
      //   console.log(this.pollDetail[k]);
      // }
        });
      }      
    });
  }
}
