import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Note: this is a service-in-service scenario:
  constructor(private messageService : MessageService) { } 

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id : number) : Observable<Hero> {
    // Note the back-ticks ` are used to define a Javascript template literal [for embedding id.]
    this.messageService.add(`HeroService: retrieving hero with id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
