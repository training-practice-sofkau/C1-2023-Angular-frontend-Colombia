import { Component } from '@angular/core';
import { Hero } from 'src/app/modules/main/models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Hero(18, 'Dr. IQ', this.powers[0], 30, 98798, '8789', 20, 87, 1.60, 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

newHero() {
  this.model = new Hero(42, '', '', 40, 98798, '97987', 20, 989, 1.60);
}

}
