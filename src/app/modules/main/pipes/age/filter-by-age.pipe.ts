import { Pipe, PipeTransform } from '@angular/core';


interface Age {
  start: number;
  end: number;
}

@Pipe({
  name: 'filterByAge'
})
export class FilterByAgePipe implements PipeTransform {

  transform(value: any[], age: Age): any[] {
    console.log('entra en pip', value)
    if (!value) {
      console.log('entra en pip IF')
      return [];
    }
    if (!age) {
      console.log('entra en AGE')
      return value;
    }
    return value.filter(item => item.age >= age.start && item.age <= age.end)
  }

}
