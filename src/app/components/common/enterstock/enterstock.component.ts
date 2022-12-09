import { Component, OnInit } from '@angular/core';
import { Symbol } from '../../models/symbol';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-enterstock',
  templateUrl: './enterstock.component.html',
  styleUrls: ['./enterstock.component.scss']
})
export class EnterstockComponent implements OnInit {

  constructor(private utilityService: UtilityService) { }

  symbol: string = "";

  savedSymbol = new Array<string>();

  ngOnInit(): void {
    this.getSavedSymbol();
  }

  getSavedSymbol() {
    this.savedSymbol = [];
    let data = this.utilityService.getSymbol();
    if (data) {
      this.savedSymbol = data.split(',');
      console.log("savedSymbol", this.savedSymbol);
    } else {
      this.savedSymbol = [];
    }
  }

  saveSymbol(data: Array<string>) {
    this.utilityService.saveSymbol(data);
  }

  onSubmit() {
    if (!this.savedSymbol.includes(this.symbol)) {
      this.savedSymbol.push(this.symbol);
      this.saveSymbol(this.savedSymbol);
    }

    console.log("enterstock", this.symbol);
    console.log("enterstocklst", this.savedSymbol);
  }

  delete() {
    this.utilityService.deleteSymbol();
    this.getSavedSymbol();
    console.log("deleted", this.savedSymbol);
  }

}
