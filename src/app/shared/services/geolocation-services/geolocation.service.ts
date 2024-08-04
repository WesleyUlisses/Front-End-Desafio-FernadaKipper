import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddress } from '../../interfaces/address/address';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient ) { }

  getAddressesFromCep(cep: string): Observable<IAddress> {
    return this.http.get<IAddress>(`${environment.geolocationApiUrl}/cep/v2/${cep}`);
  }
}
