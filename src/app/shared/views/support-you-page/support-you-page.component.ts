import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppHeaderLandingPageComponent } from '../../components/app-header-landing-page/app-header-landing-page.component';
import { AppFooterLandingPageComponent } from '../../components/app-footer-landing-page/app-footer-landing-page.component';
import { HowYouFeelsSectionComponent } from '../../components/how-you-feels-section/how-you-feels-section.component';

@Component({
  selector: 'app-support-you-page',
  standalone: true,
  imports: [ CommonModule, AppHeaderLandingPageComponent, AppFooterLandingPageComponent, HowYouFeelsSectionComponent ],
  providers: [ Router ],
  templateUrl: './support-you-page.component.html',
  styleUrl: './support-you-page.component.css'
})
export class SupportYouPageComponent {
  
    constructor(private router: Router) {}
  
    navigateTo(path: string) {
      this.router.navigate([path]);
    }
}
