import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesInterface, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: HeroesInterface[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {

  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  showHeroe(id: number): void {
    this.router.navigate(['/heroe', id]);
  }
}
