import { CommonModule } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PollService } from '../poll.service';
// import { Chart } from 'chart.js/dist/core';
import { Chart } from 'chart.js/auto';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatGridList , MatGridTile} from '@angular/material/grid-list'
import { pipeline } from 'node:stream';
// import { Pipe } from '@angular/core';

@Component({
  selector: 'app-poll-statistics',
  standalone: true,
  imports: [FormsModule, CommonModule , FlexLayoutModule , MatCard , MatCardHeader , MatCardContent , MatCardTitle , MatGridList , MatGridTile],
  templateUrl: './poll-statistics.component.html',
  styleUrl: './poll-statistics.component.css'
})
export class PollStatisticsComponent implements OnInit {
  constructor(private pollService: PollService) { };

  ngOnInit(): void {
    this.loadStatistics();
    // this.showPieData() ;
  }

  pollId: number = 0;
  pollName = '' ;
  pollStats: any[] = [];
  totalVoter : number = 0 ;

  loadStatistics() {
    this.pollId = this.pollService.getPollId();
    this.pollName = this.pollService.getPollName();

    console.log(this.pollName)
    this.pollService.getPollStatistics(this.pollId).subscribe(
      (res) => {
        console.log(res);
        this.pollStats = res;

        const labels = this.pollStats.map(option => option.optionName);
        const data = this.pollStats.map(option => option.optionPercentage);
        this.totalVoter = this.pollStats.reduce((total, option) => total + option.userName.length, 0);
        console.log(labels);
        console.log(data);

        this.pollStats.forEach(option => {
          option.userName = [...new Set(option.userName)]; // This removes duplicates
        });
        
        new Chart('myChart', {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              label: '% of Votes',
              data: data,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    )
  }
}
