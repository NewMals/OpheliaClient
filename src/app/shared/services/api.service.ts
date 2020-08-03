import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {


  constructor(private http: HttpClient){

  }

  get(controlador: string): Observable<any>{
    return this.http.get(`${environment.rutaApi}${controlador}`);
  }

  post(controlador: string, body: any): Observable<any>{
    return this.http.post(`${environment.rutaApi}${controlador}`, body);
  }
}
