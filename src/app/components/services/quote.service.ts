import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  url = environment.Chemin;
  token = environment.token;

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  });

  options = { headers: this.headers };

  getQuote(symbol: string) {
    return this.http.get<Quote>(this.url + "quote?symbol=" + symbol + "&token=" + this.token, this.options);
  }

}
