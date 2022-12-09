import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EnterstockComponent } from '../../common/enterstock/enterstock.component';
import { Quote } from '../../models/quote';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private quoteservice: QuoteService) { }

  @ViewChild("enterstockcomp") enterstockcomp?: EnterstockComponent;

  symbol: string = "";

  savedSymbol = new Array<string>();

  listQuotes = new Array<Quote>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // if (this.enterstockcomp) {
    //   this.enterstockcomp.getSavedSymbol();
    //   console.log(this.enterstockcomp.savedSymbol);
    // }
    this.getQuoteList();
  }

  getQuoteList() {
    if (this.enterstockcomp) {
      this.enterstockcomp.getSavedSymbol();
      console.log(this.enterstockcomp.savedSymbol);

      //reset list before adding quote elements
      this.listQuotes = [];

      //iterate through the symbol saved
      this.enterstockcomp.savedSymbol.forEach(element => {
        this.quoteservice.getQuote(element.toUpperCase()).subscribe(rslt => {
          this.listQuotes.push(rslt);
        })
      });

      console.log("this.listQuotes", this.listQuotes);
    }
  }



}
