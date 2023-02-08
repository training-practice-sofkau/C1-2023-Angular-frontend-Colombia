import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../models/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', age: 42, lastFight: 1657843200000, telephone: '3177019868'},
      { id: 13, name: 'Bombasto', age: 9, lastFight: 164099520000, telephone: '3177019868'  },
      { id: 14, name: 'Celeritas', age: 20, lastFight: 1671080400000, telephone: '3177019868'  },
      { id: 15, name: 'Magneta', age: 80, lastFight: 1657843200000, telephone: '3177019868' },
      { id: 16, name: 'RubberMan', age: 17, lastFight: 1657843200000, telephone: '3177019868'},
      { id: 17, name: 'Dynama', age: 37, lastFight: 1657843200000, telephone: '3177019868'},
      { id: 18, name: 'Dr. IQ', age: 42, lastFight: 1657843200000, telephone: '3177019868'},
      { id: 19, name: 'Magma', age: 10, lastFight: 1657843200000, telephone: '3177019868'},
      { id: 20, name: 'Tornado', age: 22, lastFight: 1657843200000, telephone: '3177019868' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}