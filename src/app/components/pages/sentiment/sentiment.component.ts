import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SentimentService } from '../../services/sentiment.service';
import { Location } from '@angular/common';
import { Sentiment } from '../../models/sentiment';
import { Sentimentdata } from '../../models/sentimentdata';
import { QuoteService } from '../../services/quote.service';
import { Observable } from 'rxjs';
import { Stocksymbol } from '../../models/Stocksymbol';

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

  getParam(): void {
    this.activatedroute.paramMap.subscribe(param => {
      if (param.has('symbol')) {
        this.symbol = param.get('symbol') as string;
        this.getsymbol(this.symbol);
        this.getSentiment();
      } else {
        //go back to the previous link the a parameter is not provided
        this.goBack();
      }
    })
  }

  /**Go back to the previous url
   * 
   */
  goBack(): void {
    this.location.back();
  }

  getSentiment(): void {
    this.sentimentservice.getSentiment(this.symbol, this.getDateInterval()[1], this.getDateInterval()[0]).subscribe(rslt => {

      this.sentiment.symbol = this.symbol;

      //get the list of the months to display
      let months = this.listOfMonthToDisplay(this.getDateInterval());

      //for each month get the sentiment
      months.forEach(element => {
        let index = rslt.data.findIndex(e => e.month == element)
        if (index != -1) {
          this.sentimentdata.push(rslt.data[index]);
        } else {
          //no data available for the month
          //we set a default data
          this.sentimentdata.push(this.geneDefaultSentimentData(element, this.getDateInterval()[1]));
        }
      });


      this.sentiment.data = this.sentimentdata;
    })
  }

  /**Get the last 3 month from the actual date
   * 
   * @returns [string , string]
   */
  getDateInterval(): [string, string] {

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    //start date
    let startmonth: string = "";

    let startday: string = "";
    // return two digits number for the month
    startmonth = month < 10 ? '0' + month : month.toString();

    // return two digits number for the day
    startday = day < 10 ? '0' + day : day.toString();

    let startDate = year + '-' + startmonth + '-' + startday;

    //get the last 3 month
    let lastmonth = month - 3;

    //if is negative we jump to the previous year
    if (lastmonth < 0) {
      year = year - 1;
      lastmonth = 11 + lastmonth;
    }

    //end date
    let endmonth: string = "";

    let endday: string = "";

    endmonth = lastmonth < 10 ? '0' + lastmonth : lastmonth.toString();

    endday = day < 10 ? '0' + day : day.toString();

    let endDate = year + '-' + endmonth + '-' + endday;

    let tuple2: [string, string] = [startDate, endDate];

    return tuple2;
  }

  getsymbol(symbol: string): void {
    this.quoteservice.getSymbol(symbol).subscribe((rslt) => {
      this.description = rslt.result[0].description;
    })
  }

  /** Generate a default sentiment ,to be set
   * when there is no data for a month
   * @param month number
   * @param year string
   * @returns Sentimentdata
   */
  geneDefaultSentimentData(month: number, year: string): Sentimentdata {


    let sd = new Sentimentdata();
    sd.change = 0;
    sd.month = month;
    sd.mspr = 0;
    sd.year = +year.split('-')[0];

    return sd;
  }

  listOfMonthToDisplay(date: [string, string]): Array<number> {

    //get the start month
    let i = +date[0].split('-')[1];

    //get the end month
    let j = +date[1].split('-')[1];


    let lst = new Array<number>();

    //store the concesutif month in an array
    for (let index = j; index < i; index++) {
      lst.push(index);
    }
    return lst;

  }

}
