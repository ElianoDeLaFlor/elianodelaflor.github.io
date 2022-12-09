import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-enterstock',
  templateUrl: './enterstock.component.html',
  styleUrls: ['./enterstock.component.scss']
})
export class EnterstockComponent implements OnInit {

  constructor() { }
  symbol: string = "";


  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {

  }

  onSubmit() {
    //emit new item event
    this.addNewItem(this.symbol);
    //Empty the textinput
    this.symbol = "";
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
