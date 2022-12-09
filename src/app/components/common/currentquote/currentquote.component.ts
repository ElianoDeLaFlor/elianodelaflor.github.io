import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-currentquote',
  templateUrl: './currentquote.component.html',
  styleUrls: ['./currentquote.component.scss']
})
export class CurrentquoteComponent implements OnInit, AfterViewInit {

  constructor() { }


  @Input() symbol: string = "";
  @Input() quote = new Quote();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }





}
