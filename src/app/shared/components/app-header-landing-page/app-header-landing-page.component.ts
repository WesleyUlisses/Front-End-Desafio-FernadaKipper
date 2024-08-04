import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import { RegisterOnAlertServicesModalComponent } from '../register-on-alert-services-modal/register-on-alert-services-modal.component';

@Component({
  selector: 'app-app-header-landing-page',
  standalone: true,
  imports: [ CommonModule],
  providers: [ Router, ContactModalComponent, RegisterOnAlertServicesModalComponent ],
  templateUrl: './app-header-landing-page.component.html',
  styleUrl: './app-header-landing-page.component.css'
})
export class AppHeaderLandingPageComponent {

  constructor(private route: Router, private contactModal: ContactModalComponent, private registerOnAlertService: RegisterOnAlertServicesModalComponent) { }

  toggleMenu() {
    
    const navList = document.getElementById('nav-list-of-header-items');
    
    if(!navList) {
      return;
    }

    let isNavOpen = navList.classList.contains('open');

    if(isNavOpen)
    {
      navList.classList.remove('open');
    }
    else
    {
      navList.classList.toggle('open');
      navList.style.transition = 'width 1s';
    }
  
  }

  closeMenuIfIsOpen() {
    const navList = document.getElementById('nav-list-of-header-items');

    if(!navList) {
      return;
    }

    navList.classList.remove('open');
    navList.style.transition = 'width 2s';
  }


  openContactModal() {

    this.contactModal.openDialog();

  }

  openRegisterOnAlertServicesModal() {
    this.registerOnAlertService.openDialog();
  }

  navigateTo(route: string) {
    this.route.navigate([route]);
  }
}
