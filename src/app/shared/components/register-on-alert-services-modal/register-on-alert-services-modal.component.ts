import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrNotificationService } from '../../../user-portal/services/toastr/toastr.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { GeolocationService } from '../../../shared/services/geolocation-services/geolocation.service';
import { IAddress } from '../../interfaces/address/address';
import { SimpleUserService } from '../../../simple-user/services/simple-user.service';
import { IUserRegistrationData } from '../../../simple-user/interfaces/user-registration/user-registration-data.interfaces';

@Component({
  selector: 'app-register-on-alert-services-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToastrNotificationService,
    Router,
    GeolocationService,
    SimpleUserService,
  ],
  templateUrl: './register-on-alert-services-modal.component.html',
  styleUrl: './register-on-alert-services-modal.component.css'
})
export class RegisterOnAlertServicesModalComponent {

  btnIsLoading = false;
  registerForm!: FormGroup;
  statesOfBrazil = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ] as string[];
  userRegistrationData: IUserRegistrationData = {} as IUserRegistrationData;
  address: IAddress = {} as IAddress;

  constructor(public dialog: MatDialog, private toastr: ToastrNotificationService,
    private router: Router, private geolocationService: GeolocationService,
    private simpleUserService: SimpleUserService) {


    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      cep: new FormControl(''),
      neighborhood: new FormControl(''),
    });

  }


  openDialog() {
    const dialogRef = this.dialog.open(RegisterOnAlertServicesModalComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getFormData(): { name: string, email: string, phoneNumber: string, state: string, cep: string, neighborhood: string } {
    return {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      phoneNumber: this.registerForm.get('phoneNumber')?.value,
      state: this.registerForm.get('state')?.value,
      cep: this.registerForm.get('cep')?.value,
      neighborhood: this.registerForm.get('neighborhood')?.value,
    }
  }

  isFormValid() {

    let formValue = this.getFormData();

    if (!formValue.name || !formValue.email || !formValue.phoneNumber || !formValue.state || !formValue.cep || !formValue.neighborhood) {
      return false;
    }

    return true;
  }

  async getCepFromForm() {
    let cep = this.registerForm.get('cep')?.value;
    return cep;
  }

  async getAddresByCep(cep?: string): Promise<IAddress | any> {

    let cepValue =  cep || await this.getCepFromForm();
    let address: IAddress = {} as IAddress;

    return await this.geolocationService.getAddressesFromCep(cepValue as string)
      .toPromise()
      .then((response: HttpResponse<IAddress> | any) => {

        address =
          {
            cep: response.cep,
            city: response.city,
            location: {
              coordinates: {
                latitude: response.location.coordinates.latitude,
                longitude: response.location.coordinates.longitude
              },

            },

          } as IAddress;


        let cityInput = document.getElementById('city') as HTMLInputElement;
        cityInput.value = address.city;

        return address;

      }).catch((error: HttpErrorResponse) => {
        this.toastr.showError('Erro ao buscar endereço', 'Error');
      });
  }

  async loadInformationToSave(): Promise<void> {

    let formData = this.getFormData();
    let address: IAddress | any = await this.getAddresByCep(formData.cep);
    

    this.userRegistrationData = {

      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: {
        cep: formData.cep,
        neighborhood: formData.neighborhood,
        state: formData.state,
        city: address.city,
        location: {
          coordinates: {
            latitude: address.location.coordinates.latitude,
            longitude: address.location.coordinates.longitude
          }
        }
      }
      
      } as IUserRegistrationData;

      console.log(this.userRegistrationData);
    }

    async submitForm() {

      if (!this.isFormValid()) {
        this.toastr.showError('Por favor, cheque todos os campos', 'Error');
        return;
      }

      await this.loadInformationToSave();

      this.saveInformations(this.userRegistrationData);

    }


    async saveInformations(userInformatioins: IUserRegistrationData): Promise<void> {

      this.applyLoadingIndicator();
      this.disableInputFieldAfterSubmit();

      this.simpleUserService.createUserToAlertService(userInformatioins).toPromise().then((response: HttpResponse<any> | any) => {

        if(!response) {
          this.disableLoadingIndicator();
          this.enableInputFieldAfterSubmit();
          this.toastr.showError('Erro ao registrar informações', 'Error');
        }

        if(response.status === 201 || response.status === 200) {
          this.toastr.showSuccess('Usuario registrado com sucesso! Logo você começará a receber seus alertas!', 'Success');
        }

        this.disableLoadingIndicator();
        this.enableInputFieldAfterSubmit();

      }).catch((error: HttpErrorResponse) => {
        this.toastr.showError('Erro ao realizar seu cadastro, tente mais tarde, por favor', 'Error');
        this.disableLoadingIndicator();
        this.enableInputFieldAfterSubmit();
      });

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
      let state = document.getElementById('state') as HTMLInputElement;
      let cep = document.getElementById('cep') as HTMLInputElement;
      let neighborhood = document.getElementById('neighborhood') as HTMLInputElement;

      inputName.disabled = true;
      inputPhoneNumber.disabled = true;
      inputEmail.disabled = true;
      state.disabled = true;
      cep.disabled = true;
      neighborhood.disabled = true;
  
    }

    enableInputFieldAfterSubmit(): void {
        
      let inputName = document.getElementById('name') as HTMLInputElement;
      let inputPhoneNumber = document.getElementById('phoneNumber') as HTMLInputElement;
      let inputEmail = document.getElementById('email') as HTMLInputElement;
      let state = document.getElementById('state') as HTMLInputElement;
      let cep = document.getElementById('cep') as HTMLInputElement;
      let neighborhood = document.getElementById('neighborhood') as HTMLInputElement;

      inputName.disabled = false;
      inputPhoneNumber.disabled = false;
      inputEmail.disabled = false;
      state.disabled = false;
      cep.disabled = false;
      neighborhood.disabled = false;

    }
  }
