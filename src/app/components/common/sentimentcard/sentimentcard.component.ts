import { Component, Input, OnInit } from '@angular/core';
import { Sentiment } from '../../models/sentiment';
import { Sentimentdata } from '../../models/sentimentdata';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-sentimentcard',
  templateUrl: './sentimentcard.component.html',
  styleUrls: ['./sentimentcard.component.scss']
})
export class SentimentcardComponent implements OnInit {

  constructor(private quoteservice: QuoteService) { }

  @Input() sentiment = new Sentimentdata();

  ngOnInit(): void {

  }


}
