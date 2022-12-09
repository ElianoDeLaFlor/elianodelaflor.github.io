import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: number): string {
    let month: string = "";
    switch (value) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "Febrary";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;

      default:
        month = "December";
        break;
    }
    return month;
  }

}
