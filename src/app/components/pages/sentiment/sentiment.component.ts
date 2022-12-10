import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SentimentService } from '../../services/sentiment.service';
import { Location } from '@angular/common';
import { Sentiment } from '../../models/sentiment';
import { Sentimentdata } from '../../models/sentimentdata';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private sentimentservice: SentimentService, private location: Location, private quoteservice: QuoteService) { }

  ngOnInit(): void {
    this.getParam();
  }

  symbol: string = "";
  description: string = "";
  sentiment = new Sentiment();
  sentimentdata = new Array<Sentimentdata>();

  getParam() {
    this.activatedroute.paramMap.subscribe(param => {
      if (param.has('symbol')) {
        this.symbol = param.get('symbol') as string;
        this.getsymbol(this.symbol);
        this.getSentiment();
      } else {
        this.goBack();
      }
    })
  }

  goBack() {
    this.location.back();
  }

  getSentiment() {
    this.sentimentservice.getSentiment(this.symbol, this.getDateInterval()[1], this.getDateInterval()[0]).subscribe(rslt => {
      this.sentiment.symbol = this.symbol;
      console.log('sentimentdata', rslt.data);
      let months = this.geneDefaultSentimentData_(this.getDateInterval());

      months.forEach(element => {
        let index = rslt.data.findIndex(e => e.month == element)
        if (index != -1) {
          this.sentimentdata.push(rslt.data[index]);
        } else {
          this.sentimentdata.push(this.geneDefaultSentimentData(element, this.getDateInterval()[1]));
        }
      });


      this.sentiment.data = this.sentimentdata;
    })
  }

  sortByMonth(a: Sentimentdata, b: Sentimentdata) {
    if (a.month < b.month) {
      return -1;
    }
    if (a.month > b.month) {
      return 1;
    }
    return 0;
  }

  getDateInterval(): [string, string] {

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    //start date
    let startmonth: string = "";

    let startday: string = "";

    startmonth = month < 10 ? '0' + month : month + '';

    startday = day < 10 ? '0' + day : day + '';

    let startDate = year + '-' + startmonth + '-' + startday;
    //

    let lastmonth = month - 3;

    //if is negative we jump to the previous year
    if (lastmonth < 0) {
      year = year - 1;
      lastmonth = 11 + lastmonth;
    }

    //start date
    let endmonth: string = "";

    let endday: string = "";

    endmonth = lastmonth < 10 ? '0' + lastmonth : lastmonth + '';

    endday = day < 10 ? '0' + day : day + '';

    let endDate = year + '-' + endmonth + '-' + endday;

    let tuple2: [string, string] = [startDate, endDate];

    return tuple2;
  }

  getsymbol(symbol: string) {
    this.quoteservice.getSymbol(symbol).subscribe((rslt) => {
      this.description = rslt.result[0].description;
    })
  }

  geneDefaultSentimentData(month: number, year: string): Sentimentdata {


    let sd = new Sentimentdata();
    sd.change = 0;
    sd.month = month;
    sd.mspr = 0;
    sd.year = +year.split('-')[0];

    console.log('default', sd);

    return sd;
  }

  geneDefaultSentimentData_(date: [string, string]) {
    //interval
    let i = +date[0].split('-')[1];
    let j = +date[1].split('-')[1];
    let lst = new Array<number>();

    for (let index = j; index < i; index++) {
      lst.push(index);

    }

    console.log('mmmm', lst);

    return lst;
  }

}
