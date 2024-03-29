import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCard , MatCardHeader , MatCardAvatar , MatCardTitle , MatCardSubtitle ,MatCardContent } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-created-polls',
  standalone: true,
  imports: [FormsModule, CommonModule , MatCard , MatCardHeader , MatCardTitle , MatCardSubtitle , MatCardContent ,MatCardAvatar , MatButtonModule , RouterLink],
  templateUrl: './user-created-polls.component.html',
  styleUrl: './user-created-polls.component.css',
})
export class UserCreatedPollsComponent implements OnInit {

  constructor(
    private pollService: PollService,
    private userService: UserService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  createdPolls:any[] = [];

  getData() {
    this.pollService
      .getAllPollsByUser(this.userService.getUserName())
      .subscribe((data) => {
        console.log(data);
        this.createdPolls = data;
      });
  }

  onPollClickInfo(poll: any) {
    this.pollService.setPollId(poll.pollId);
    this.pollService.setPollName(poll.pollName);
    this.router.navigateByUrl("home/showStats")
  }
}