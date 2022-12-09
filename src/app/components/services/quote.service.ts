import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from '../models/quote';
import { Stocksymbol } from '../models/Stocksymbol';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  private url = environment.Chemin;
  private token = environment.token;

  getQuote(symbol: string) {
    return this.http.get<Quote>(this.url + "quote?symbol=" + symbol + "&token=" + this.token);
  }

  getSymbol(symbol: string) {
    return this.http.get<Stocksymbol>(this.url + "search?q=" + symbol + "&token=" + this.token);
  }

}
