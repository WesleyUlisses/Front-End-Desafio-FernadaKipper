import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-first-section-landing-page',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router ],
  templateUrl: './app-first-section-landing-page.component.html',
  styleUrl: './app-first-section-landing-page.component.css'
})
export class AppFirstSectionLandingPageComponent {

  constructor(private route: Router) { }

  navigateTo(route: string) {
    this.route.navigate([route]);
  }
}
