import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeAVolunteerModalComponent } from '../be-a-volunteer-modal/be-a-volunteer-modal.component';

@Component({
  selector: 'app-app-fifth-section-landing-page',
  standalone: true,
  imports: [ CommonModule],
  providers: [ BeAVolunteerModalComponent ],
  templateUrl: './app-fifth-section-landing-page.component.html',
  styleUrl: './app-fifth-section-landing-page.component.css'
})
export class AppFifthSectionLandingPageComponent {

  constructor() { }


}
