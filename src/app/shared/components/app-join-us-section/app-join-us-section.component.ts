import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BeAVolunteerModalComponent } from '../be-a-volunteer-modal/be-a-volunteer-modal.component';
import { GiveADonationModalComponent } from '../give-a-donation-modal/give-a-donation-modal.component';

@Component({
  selector: 'app-app-join-us-section',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router, BeAVolunteerModalComponent, GiveADonationModalComponent ],
  templateUrl: './app-join-us-section.component.html',
  styleUrl: './app-join-us-section.component.css'
})
export class AppJoinUsSectionComponent {

    constructor(private router: Router, private beAVolunteerModal: BeAVolunteerModalComponent, private giveDonationModal: GiveADonationModalComponent) {}

    navigateTo(path: string) {
        this.router.navigate([path]);
    }
    
    
  openBeAVolunteerModal() {
    this.beAVolunteerModal.openDialog();
  }

  openGiveDonationModal() {
    this.giveDonationModal.openDialog();
  }

}
