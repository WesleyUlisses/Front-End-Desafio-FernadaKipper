import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-third-section-landing-page',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router ],
  templateUrl: './app-third-section-landing-page.component.html',
  styleUrl: './app-third-section-landing-page.component.css'
})
export class AppThirdSectionLandingPageComponent {

  constructor(private route: Router) { }

  navigateTo(route: string) {
    this.route.navigate([route]);
  }
}
