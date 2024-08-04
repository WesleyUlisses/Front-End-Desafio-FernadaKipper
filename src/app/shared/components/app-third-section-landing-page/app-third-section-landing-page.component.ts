import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterOnAlertServicesModalComponent } from '../register-on-alert-services-modal/register-on-alert-services-modal.component';
@Component({
  selector: 'app-app-third-section-landing-page',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router, RegisterOnAlertServicesModalComponent ],
  templateUrl: './app-third-section-landing-page.component.html',
  styleUrl: './app-third-section-landing-page.component.css'
})
export class AppThirdSectionLandingPageComponent {

  constructor(private route: Router, private registerOnAlertServices: RegisterOnAlertServicesModalComponent) { }

  navigateTo(route: string) {
    this.route.navigate([route]);
  }

  openRegisterOnAlertServicesModal() {
    this.registerOnAlertServices.openDialog();
  }
}
