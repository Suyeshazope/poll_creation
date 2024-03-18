import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle' ;
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-poll-type-option',
  standalone: true,
  imports: [TitleComponent , MatButtonModule , MatButtonToggleGroup , MatButtonToggle , RouterLink , RouterOutlet],
  templateUrl: './poll-type-option.component.html',
  styleUrl: './poll-type-option.component.css'
})
export class PollTypeOptionComponent {

}
