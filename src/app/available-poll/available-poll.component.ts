import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { CommonModule } from '@angular/common';
import {MatCard , MatCardHeader , MatCardTitle , MatCardSubtitle , MatCardContent} from '@angular/material/card'

@Component({
  selector: 'app-available-poll',
  standalone: true,
  imports: [CommonModule , MatCard , MatCardHeader , MatCardTitle , MatCardSubtitle , MatCardContent],
  templateUrl: './available-poll.component.html',
  styleUrl: './available-poll.component.css'
})
export class AvailablePollComponent implements OnInit {
  availablePolls: any[] = [];

  constructor(private pollService: PollService) { }
  ngOnInit(): void {
    this.loadsavailablePolls();
  }

  loadsavailablePolls() {
    this.pollService.availablePoll().subscribe(
      (data) => {
        // console.log(data);
        // console.log(data[0].pollName);
        this.availablePolls = data ;
      }
    )
  }
}
