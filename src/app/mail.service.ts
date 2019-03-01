import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Mail } from './mail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailsUrl = 'https://5c5a21f9af3ff700140de477.mockapi.io/api/email';

  getMails(): Observable<Mail[]> {    
    return this.http.get<Mail[]>(this.mailsUrl);
  }

  getMail(id: string) :Observable<Mail> {
    const url = `${this.mailsUrl}/${id}`;
    return this.http.get<Mail>(url) 
  }

  constructor(private http: HttpClient) { }
}
