import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: number): string {
    let date = new Date(value);
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    const year = date.getFullYear();
  
    if (Number(month) < 10) month = month.toString().padStart(2, "0");

    if(Number(day) < 10) day = day.toString().padStart(2, "0");
    console.log('ULI ', `${year}${month}${day}`)
    return moment(`${year}${month}${day}`, "YYYYMMDD").fromNow(); // February 7th 2023, 2:17:43 pm

  }
}