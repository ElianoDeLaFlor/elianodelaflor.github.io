import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, mergeMap, of } from 'rxjs';
import { EnterstockComponent } from '../../common/enterstock/enterstock.component';
import { Quote } from '../../models/quote';
import { Stocksymbol } from '../../models/Stocksymbol';
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

  /**Retrieve the symbols saved in the local storage
   * 
   */
  getSavedSymbol(): void {
    this.savedSymbol = [];
    let data = this.utilityService.getSymbol();
    if (data) {
      this.savedSymbol = data.split(',');
    } else {
      this.savedSymbol = [];
    }
  }

  /**Save the symbols to the local storage
   * 
   * @param data Array<string> of string containing the symbols
   */
  saveSymbol(data: Array<string>): void {
    this.utilityService.saveSymbol(data);
  }

  /**Add a symbol to the local storage
   * 
   * @param data string the symblol to add to the lacal storage
   */
  addSymbolItem(data: string): void {
    this.getSavedSymbol();

    //Check if the symbol is not already added
    if (!this.savedSymbol.includes(data.toUpperCase())) {
      this.savedSymbol.push(data.toUpperCase());
      this.saveSymbol(this.savedSymbol);
    }

    this.getQuoteList();
  }

  /**Delete one symbol from the local storage
   * 
   * @param data string symbol to delete
   */
  deleteSymbolItem(data: string): void {
    this.getSavedSymbol();

    let itemindex = this.savedSymbol.findIndex(s => s == data);

    if (itemindex != -1) {
      this.savedSymbol.splice(itemindex, 1);
      this.saveSymbol(this.savedSymbol);
    }
    this.getQuoteList();
  }

  /**Empty the local storage containing the symbol
   * 
   */
  delete_(): void {
    this.utilityService.deleteSymbol();
    this.getSavedSymbol();
  }

  /**Gets quotes data from the remote server
   * 
  */
  getQuoteList(): void {

    //reset quote list before adding quote elements
    this.listQuotes = [];

    //iterate through the symbol saved
    this.savedSymbol.forEach((element, index) => {
      //array of observable
      let array = [this.quoteservice.getQuote(element), this.quoteservice.getSymbol(element)];
      forkJoin(array).subscribe(rslt => {

        (<Quote>rslt[0]).symbol = (<Stocksymbol>rslt[1]);

        this.listQuotes.push((<Quote>rslt[0]));

      });
    });

  }

}
