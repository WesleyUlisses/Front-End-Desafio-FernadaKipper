import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IUserRegistrationData } from '../interfaces/user-registration/user-registration-data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SimpleUserService {

  constructor(private http: HttpClient ) { }

  createUserToAlertService(user: IUserRegistrationData): Observable<any> {
    return this.http.post<IUserRegistrationData>(`${environment.apiUrl}user/create-user`, user);
  }
}
