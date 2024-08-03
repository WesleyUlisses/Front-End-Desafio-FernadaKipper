import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BeAVolunteerModalComponent } from '../be-a-volunteer-modal/be-a-volunteer-modal.component';

@Component({
  selector: 'app-app-join-us-section',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router, BeAVolunteerModalComponent ],
  templateUrl: './app-join-us-section.component.html',
  styleUrl: './app-join-us-section.component.css'
})
export class AppJoinUsSectionComponent {

    constructor(private router: Router, private beAVolunteerModal: BeAVolunteerModalComponent) {}

    navigateTo(path: string) {
        this.router.navigate([path]);
    }
    
    
  openBeAVolunteerModal() {
    this.beAVolunteerModal.openDialog();
  }
}
