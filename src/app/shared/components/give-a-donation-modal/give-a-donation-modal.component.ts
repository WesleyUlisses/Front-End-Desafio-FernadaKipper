import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrNotificationService } from '../../../user-portal/services/toastr/toastr.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-a-donation-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToastrNotificationService,
    Router
  ],
  templateUrl: './give-a-donation-modal.component.html',
  styleUrl: './give-a-donation-modal.component.css'
})
export class GiveADonationModalComponent {
  contactForm! : FormGroup;
    
  constructor(public dialog: MatDialog, private toastr: ToastrNotificationService, private router: Router) {

      this.contactForm = new FormGroup({
          name: new FormControl(''),
          email: new FormControl(''),
          payment: new FormControl(''),
          message: new FormControl('')
      });
  }


  openDialog() {
    const dialogRef = this.dialog.open( GiveADonationModalComponent );

    dialogRef.afterClosed().subscribe(result => { 
    });
  }

  getFormValue() : {name: string, payment: string, email: string, message: string} {
      return {
          name: this.contactForm.get('name')?.value,
          payment: this.contactForm.get('payment')?.value,
          email: this.contactForm.get('email')?.value,
          message: this.contactForm.get('message')?.value
      } 
  }

  isFormValid() {
    
    let formValue = this.getFormValue();

    if(!formValue.name || !formValue.payment|| !formValue.email) {
      return false;
    }

    return true;
  }

  submitForm() {

    if(!this.isFormValid()) {
      this.toastr.showError('Por favor, cheque todos os campos', 'Error');
      return;
    }

    let data = {
      message: this.getFormValue().message,
      email: this.getFormValue().email,
      title: 'Doação',
      name: this.getFormValue().name,
      payment: this.getFormValue().payment,
    }

    this.saveInformations();
  }

  saveInformations()  {
    this.toastr.showSuccess('Informações salvas com sucesso', 'Success');

    this.goToDonationPage();
  }


  goToDonationPage() {

    let urlToDonate = environment.mercadoPagoPaymentRedirectUrl;

    if(!urlToDonate){
      this.toastr.showError('Erro ao redirecionar para a página de doação', 'Error');
      return;
    }

    if (typeof window !== 'undefined') {
      // Usar window.open para abrir a URL em uma nova guia
      window.open(urlToDonate, '_blank');
    }

    this.router.navigateByUrl(urlToDonate);

    this.dialog.closeAll();
  }
}
