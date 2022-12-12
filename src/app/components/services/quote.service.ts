import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from '../models/quote';
import { Stocksymbol } from '../models/Stocksymbol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  private url = environment.Chemin;
  private token = environment.token;

  getQuote(symbol: string): Observable<Quote> {
    return this.http.get<Quote>(this.url + "quote?symbol=" + symbol + "&token=" + this.token);
  }

  getSymbol(symbol: string): Observable<Stocksymbol> {
    return this.http.get<Stocksymbol>(this.url + "search?q=" + symbol + "&token=" + this.token);
  }

}
