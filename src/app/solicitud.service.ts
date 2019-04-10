import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }
  private httpUrl="https://restcountries.eu/rest/v2/all"


  getpaises():Observable<any[]> {
    return this.http.get<any[]>(this.httpUrl);
  }

}
