import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { PollTypeOptionComponent } from '../poll-type-option/poll-type-option.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent , PollTypeOptionComponent , RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
