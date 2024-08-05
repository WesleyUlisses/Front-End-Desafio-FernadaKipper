import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IEmail } from '../../interfaces/email/email.interface';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient ) { }

  sendEmail( email: IEmail ): Observable<any> {
    return this.http.post(`${environment.apiUrl}/email/send-email`, email);
  }
  
}
