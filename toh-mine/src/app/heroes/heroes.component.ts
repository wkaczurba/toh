import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe( h => this.heroes = h);
  }
  
  add(name : string) {
    //hero : Hero;
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(
      hero => this.heroes.push(hero)
    );
  }

  delete(hero : Hero) {
    // there is no remove on the array. this substitutes it:
    this.heroes = this.heroes.filter( h => h!==hero );

    this.heroService.deleteHero(hero).subscribe();
  }

}
