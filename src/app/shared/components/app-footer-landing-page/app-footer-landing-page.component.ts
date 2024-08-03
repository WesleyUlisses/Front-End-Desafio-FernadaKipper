import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-footer-landing-page',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router ],
  templateUrl: './app-footer-landing-page.component.html',
  styleUrl: './app-footer-landing-page.component.css'
})
export class AppFooterLandingPageComponent {

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
