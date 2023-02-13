import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipePhone'
})
export class CustomPipePhonePipe implements PipeTransform {

  transform(phone: string): string {
    let newPhone = phone[0] + phone[1] + phone[2] + "-" + phone[3] + phone[4] + phone[5] + "-" + phone[6] + phone[7] + phone[8] + phone[9]
    return newPhone;
  }

}