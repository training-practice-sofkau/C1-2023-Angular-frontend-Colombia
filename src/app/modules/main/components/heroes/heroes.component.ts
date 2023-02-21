import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from 'src/app/modules/main/models/hero';

interface Age {
  start: number;
  end: number;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  ageToFilter = 42
  show = false

  rangeAge = {
    start: 0,
    end: 100,
  }

  h: Hero = {
    id: 0,
    name: '',
    power: '',
    age: 0,
    lastFight: 0,
    telephone: '',
    salary: 20,
    birthday: 8789,
    height: 1.60
  }

  constructor(private heroService: HeroService) {
    //this.rangeAge.start = this.rangeAge.start;
    //this.rangeAge.end = this.rangeAge.end
  }

  ngOnInit(): void {
    if(this.rangeAge.start === 0 && this.rangeAge.end === 0){

    }
   //this.getHeroes();
   // console.log('h ', this.heroes)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    console.log('h ', this.heroes)
  }

  add(): void {
    //name = name.trim();
    //if (!name) { return; }
    this.heroService.addHero(this.h)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
      console.log('heros ', this.heroes)
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
