import { Component, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'sofka-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.scss'],
})
export class MyPipesComponent implements OnInit {
  birthday = new Date(2000, 8, 17);
  fullnameToUpperCase = 'Kevin Santiago Baquero Chavarro';
  textToLowerCase = 'NACIÓ EL';
  savings = 2000000;
  weigth = 3.8087;
  natalityRate = 0.514;
  yearBorn = '2000';
  phoneNumber = '3025727456';
  name = 'Santiago Chavarro';

  constructor() {}

  ngOnInit(): void {}
}
