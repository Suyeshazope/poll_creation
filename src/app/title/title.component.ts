import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatIcon, MatToolbar, DashboardComponent, MatIconButton, MatSidenavModule, MatListModule, MatButtonModule, RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
