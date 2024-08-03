import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-app-footer-landing-page',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router, ContactModalComponent ],
  templateUrl: './app-footer-landing-page.component.html',
  styleUrl: './app-footer-landing-page.component.css'
})
export class AppFooterLandingPageComponent {

  constructor(private router: Router, private contactModal: ContactModalComponent) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  openContactModal() {
    this.contactModal.openDialog();
  }
}
