import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrNotificationService } from '../../../user-portal/services/toastr/toastr.service';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToastrNotificationService
  ],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.css'
})

export class ContactModalComponent {

    contactForm! : FormGroup;
    
    constructor(public dialog: MatDialog, private toastr: ToastrNotificationService) {

        this.contactForm = new FormGroup({
            name: new FormControl(''),
            phoneNumber: new FormControl(''),
            email: new FormControl(''),
            message: new FormControl('')
        });
    }


    openDialog() {
      const dialogRef = this.dialog.open(ContactModalComponent);
  
      dialogRef.afterClosed().subscribe(result => { 
      });
    }

    getFormValue() : {name: string, phoneNumber: string, email: string, message: string} {
        return {
            name: this.contactForm.get('name')?.value,
            phoneNumber: this.contactForm.get('phoneNumber')?.value,
            email: this.contactForm.get('email')?.value,
            message: this.contactForm.get('message')?.value
        } 
    }

    isFormValid() {
      
      let formValue = this.getFormValue();

      if(!formValue.name || !formValue.phoneNumber|| !formValue.email || !formValue.message) {
        return false;
      }

      return true;
    }

    submitForm() {

      if(!this.isFormValid()) {
        this.toastr.showError('Por favor, cheque todos os campos', 'Error');
        return;
      }

      let email = {
        message: this.getFormValue().message,
        email: this.getFormValue().email,
        name: this.getFormValue().name,
        phoneNumber: this.getFormValue().phoneNumber,
      }

      this.sendEmail();
    }

    sendEmail() : Promise<void> {

      return new Promise((resolve, reject) => {

        resolve(this.toastr.showSuccess('Email enviado com sucesso', 'Success'));
        reject(this.toastr.showError('Erro ao enviar email', 'Error'));


      });
    }
}
