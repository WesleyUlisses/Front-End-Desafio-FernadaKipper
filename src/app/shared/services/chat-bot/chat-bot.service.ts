import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'URL_DO_SEU_BACKEND';
  private baseURL: string = environment.dialogflowapi;
  private token: string = 'SEU TOKEN'

  constructor(private http: HttpClient) { }

  public getResponse(query: string) {
    
    let data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    }

    return this.http
      .post(`${this.baseURL}`, data, { headers: this.getHeaders() })
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
