import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderLandingPageComponent } from '../../components/app-header-landing-page/app-header-landing-page.component';
import { AppFirstSectionLandingPageComponent } from '../../components/app-first-section-landing-page/app-first-section-landing-page.component';
import { AppSecondSectionLandingPageComponent } from '../../components/app-second-section-landing-page/app-second-section-landing-page.component';
import { AppThirdSectionLandingPageComponent } from '../../components/app-third-section-landing-page/app-third-section-landing-page.component';
import { AppFifthSectionLandingPageComponent } from '../../components/app-fifth-section-landing-page/app-fifth-section-landing-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ CommonModule, AppHeaderLandingPageComponent, AppFirstSectionLandingPageComponent,
     AppSecondSectionLandingPageComponent, AppThirdSectionLandingPageComponent, 
     AppFifthSectionLandingPageComponent,],
  providers: [ Router ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
