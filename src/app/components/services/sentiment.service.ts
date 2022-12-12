import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sentiment } from '../models/sentiment';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  constructor(private http: HttpClient) { }

  private url = environment.Chemin;
  private token = environment.token;

  getSentiment(symbol: string, startDate: string, endDate: string): Observable<Sentiment> {
    return this.http.get<Sentiment>(this.url + "stock/insider-sentiment?symbol=" + symbol + "&from=" + startDate + "&to=" + endDate + "&token=" + this.token);
  }
}
