import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../../models/quote';
import { Stocksymbol } from '../../models/Stocksymbol';
import { Symboldata } from '../../models/symboldata';

@Component({
  selector: 'app-currentquote',
  templateUrl: './currentquote.component.html',
  styleUrls: ['./currentquote.component.scss']
})
export class CurrentquoteComponent implements OnInit, AfterViewInit {

  constructor() { }


  symbol = new Symboldata();
  @Input() quote = new Quote();
  @Output() deleteItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  ngDoCheck(): void {

  }
  ngAfterContentInit(): void {
    this.symbol = this.quote.symbol.result[0];
  }

  deleteItem(value: string) {
    this.deleteItemEvent.emit(value);
  }

}
