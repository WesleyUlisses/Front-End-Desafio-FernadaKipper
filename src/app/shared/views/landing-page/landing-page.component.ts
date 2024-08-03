import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderLandingPageComponent } from '../../components/app-header-landing-page/app-header-landing-page.component';
import { AppFirstSectionLandingPageComponent } from '../../components/app-first-section-landing-page/app-first-section-landing-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ CommonModule, AppHeaderLandingPageComponent, AppFirstSectionLandingPageComponent ],
  providers: [ Router ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
