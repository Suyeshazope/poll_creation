import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-poll-statistics',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './poll-statistics.component.html',
  styleUrl: './poll-statistics.component.css'
})
export class PollStatisticsComponent implements OnInit{
  constructor(private pollService : PollService){};
  ngOnInit(): void {
    this.loadStatistics();
  }
  pollId : number = 0;
  pollStats = [];
  loadStatistics(){
    this.pollId = this.pollService.getPollId();
    this.pollService.getPollStatistics(this.pollId).subscribe(
      (data)=>{
        console.log(data);
        this.pollStats = data;
      }
    )
  }
}
