import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
} from '@angular/material/card';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-available-poll',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
  ],
  templateUrl: './available-poll.component.html',
  styleUrl: './available-poll.component.css',
})
export class AvailablePollComponent implements OnInit {
  availablePolls2: any[] = [];
  votedPollsList: any[] = [];
  availablePolls: any[] = [];
  votedPolls2: any[] = [];

  constructor(
    private pollService: PollService,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.loadsavailablePolls();
  }

  loadsavailablePolls() {
    this.pollService.availablePoll().subscribe((data) => {
      // console.log(data);
      //  we will try to take voted polls by user
      this.pollService
        .getVotedPolls(this.userService.getUserName())
        .subscribe((votedPolls) => {
          this.votedPollsList = votedPolls;
          // console.log(votedPolls.creationTime);
          
          this.availablePolls2 = data;
          console.log(data);
          
          console.log(data[0].creationTime);
          

          for (let i = 0; i < this.availablePolls2.length; i++) {
            // iterate for each elemet in 2nd array
            let flag = false;
            for (let j = 0; j < this.votedPollsList.length; j++) {
              if (
                this.votedPollsList[j].pollId == this.availablePolls2[i].pollId
              ) {
                flag = true;
                break;
              }
            }
            if (!flag) {
              this.availablePolls.push(this.availablePolls2[i]);
            } else {
              this.votedPolls2.push(this.availablePolls2[i]);
            }
          }
          // console.log(this.availablePolls);
          // console.log("voted poll ---------");
          // console.log(this.votedPolls2);
          // console.log("--------------");
          // for (let i = 0; i < this.availablePolls.length; i++) {
          //   console.log(this.availablePolls[i].creationTime.substring(11, 16));
          //   // console.log(typeof(this.availablePolls[i].creationTime))
          // }
        });
    });
  }

  onPollCardClicked(poll: any) {
    // Set pollName and pollId when a card is clicked
    this.pollService.setPollName(poll.pollName);
    this.pollService.setPollId(poll.pollId);
    this.router.navigateByUrl('home/votingpoll');
  }

  // now = new Date();
  remainingTime(creationTime: any) {
    // let creationTime = time.substring(11, 16);
    // let hours = +time.substring(11, 13);
    // let min = +time.substring(14, 16);

    // let remHours = 0;
    // if (hours < 12) {
    //   remHours = hours + 24 - this.now.getHours();
    // } else {
    //   remHours = hours + 24 - this.now.getHours() - 24;
    // }

    // if (remHours < 0) remHours *= -1;
    // if (remHours > 23) remHours = 0;
    // let remMin = min - this.now.getMinutes();
    // if (remMin < 0) remMin *= -1;
    creationTime = new Date(creationTime);

    const currentTime = new Date();
    const expirationTime = new Date(creationTime.getTime() + 24 * 60 * 60 * 1000);

    let timeDifference = expirationTime.getTime() - currentTime.getTime();

    // Convert milliseconds to hours and minutes
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));


    const obj = {
      hours: hours,
      minutes: minutes,
      // sec : remSec
    };
    return obj;
  }
}
