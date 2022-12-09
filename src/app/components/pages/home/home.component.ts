import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EnterstockComponent } from '../../common/enterstock/enterstock.component';
import { Quote } from '../../models/quote';
import { QuoteService } from '../../services/quote.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private quoteservice: QuoteService, private utilityService: UtilityService) { }



  symbol: string = "";

  savedSymbol = new Array<string>();

  listQuotes = new Array<Quote>();

  ngOnInit(): void {
    this.getSavedSymbol();
    this.getQuoteList();
  }

  getSavedSymbol() {
    this.savedSymbol = [];
    let data = this.utilityService.getSymbol();
    if (data) {
      this.savedSymbol = data.split(',');
    } else {
      this.savedSymbol = [];
    }
  }

  saveSymbol(data: Array<string>) {
    this.utilityService.saveSymbol(data);
  }

  addSymbolItem(data: string) {
    this.getSavedSymbol();
    //Check if the symbol is not already added
    if (!this.savedSymbol.includes(data.toUpperCase())) {
      this.savedSymbol.push(data.toUpperCase());
      this.saveSymbol(this.savedSymbol);
    }

    this.getQuoteList();
  }

  deleteSymbolItem(data: string) {
    this.getSavedSymbol();
    let itemindex = this.savedSymbol.findIndex(s => s == data);

    if (itemindex != 1) {
      this.savedSymbol.splice(itemindex, 1);
      this.saveSymbol(this.savedSymbol);
    }

    this.getQuoteList();
  }

  delete_() {
    this.utilityService.deleteSymbol();
    this.getSavedSymbol();
    console.log("deleted", this.savedSymbol);
  }

  getQuoteList() {

    //reset quote list before adding quote elements
    this.listQuotes = [];

    //iterate through the symbol saved
    this.savedSymbol.forEach(element => {
      this.quoteservice.getQuote(element).subscribe((rslt) => {
        this.quoteservice.getSymbol(element).subscribe(sym => {
          rslt.symbol = sym;
          this.listQuotes.push(rslt);
        })

      });

    });
    console.log("this.listQuotes", this.listQuotes);
  }

  getsymbol(symbol: string) {
    this.quoteservice.getSymbol(symbol).subscribe((rslt) => {
      console.log("description", rslt);
    })
  }

  test() {
    // this.getsymbol("TSLA");
    this.getQuoteList();
  }



}
