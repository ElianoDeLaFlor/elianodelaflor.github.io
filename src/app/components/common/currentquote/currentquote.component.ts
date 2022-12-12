import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../../models/quote';
import { Stocksymbol } from '../../models/Stocksymbol';
import { Symboldata } from '../../models/symboldata';

@Component({
  selector: 'app-currentquote',
  templateUrl: './currentquote.component.html',
  styleUrls: ['./currentquote.component.scss']
})
export class CurrentquoteComponent implements OnInit, AfterContentInit {

  constructor() { }


  symbol = new Symboldata();
  @Input() quote = new Quote();
  @Output() deleteItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }


  ngAfterContentInit(): void {
    this.symbol = this.quote.symbol.result[0];
  }

  deleteItem(value: string) {
    //emit delete event
    this.deleteItemEvent.emit(value);
  }

}
