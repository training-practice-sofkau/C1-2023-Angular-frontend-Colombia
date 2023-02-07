import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero/hero.service';
import { MessageService } from '../services/message/message.service';
import { HEROES } from '../mocks/mock-heroes';

@Component({
  selector: 'sofka-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
