import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrNotificationService } from '../../../user-portal/services/toastr/toastr.service';
import { EmailService } from '../../../simple-user/services/email/email.service';
import { IEmail } from '../../../simple-user/interfaces/email/email.interface';
import { FormaterMessage } from '../../../simple-user/utils/formater-message';

@Component({
  selector: 'app-be-a-volunteer-modal',
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
  templateUrl: './be-a-volunteer-modal.component.html',
  styleUrl: './be-a-volunteer-modal.component.css'
})
export class BeAVolunteerModalComponent {

  contactForm! : FormGroup;
  btnIsLoading = false;

  constructor(public dialog: MatDialog, private toastr: ToastrNotificationService, private emailService: EmailService) {

      this.contactForm = new FormGroup({
          name: new FormControl(''),
          phoneNumber: new FormControl(''),
          email: new FormControl(''),
          message: new FormControl('')
      });
  }


  openDialog() {
    const dialogRef = this.dialog.open(BeAVolunteerModalComponent);

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

  async submitForm() {

    if(!this.isFormValid()) {
      this.toastr.showError('Por favor, cheque todos os campos', 'Error');
      return;
    }

    let formValue = this.getFormValue();
      let emailMessage = this.formatEmailMessage(formValue.message, formValue.name, formValue.phoneNumber, formValue.email);

      let email = {
          to: formValue.email,
          subject: 'Contato',
          text: emailMessage,
      } as IEmail;

      await this.sendEmail(email);
  }

  async sendEmail(email: IEmail) : Promise<void> {

    this.applyLoadingIndicator();
    this.disableInputFieldAfterSubmit();

    await this.emailService.sendEmail(email)
    .toPromise()
    .then((response: HttpResponse<any> | any) => {

      if(response.status !== 200) {
        this.toastr.showError('Erro ao enviar email', 'Erro');
        this.disableLoadingIndicator();
        this.enableInputFieldAfterSubmit();
        return;
      }

      if(response.status === 200 || response.status === 201) {
        this.toastr.showSuccess('Email enviado com sucesso', 'Sucesso');
        this.disableLoadingIndicator();
        this.enableInputFieldAfterSubmit();
      }

    })
    .catch((error: HttpErrorResponse) => {
      this.toastr.showError('Erro ao enviar email', 'Erro');
      this.disableLoadingIndicator();
      this.enableInputFieldAfterSubmit();
    })
    
  }

  formatEmailMessage(message: string, name: string, phoneNumber: string, email: string) : string {
    return FormaterMessage.formatEmailWantToBePartnerMessage(message, name, phoneNumber, email);
  }

  applyLoadingIndicator(): void {

    this.btnIsLoading = true;

  }

  disableLoadingIndicator(): void {
    
    this.btnIsLoading = false;

  }

  disableInputFieldAfterSubmit(): void {

    let inputName = document.getElementById('name') as HTMLInputElement;
    let inputPhoneNumber = document.getElementById('phoneNumber') as HTMLInputElement;
    let inputEmail = document.getElementById('email') as HTMLInputElement;
    let inputMessage = document.getElementById('exampleFormControlTextarea1') as HTMLInputElement;

    inputName.disabled = true;
    inputPhoneNumber.disabled = true;
    inputEmail.disabled = true;
    inputMessage.disabled = true;

  }

  enableInputFieldAfterSubmit(): void {
      
    let inputName = document.getElementById('name') as HTMLInputElement;
    let inputPhoneNumber = document.getElementById('phoneNumber') as HTMLInputElement;
    let inputEmail = document.getElementById('email') as HTMLInputElement;
    let inputMessage = document.getElementById('exampleFormControlTextarea1') as HTMLInputElement;

    inputName.disabled = false;
    inputPhoneNumber.disabled = false;
    inputEmail.disabled = false;
    inputMessage.disabled = false;

  }

}
