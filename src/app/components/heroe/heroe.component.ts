import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/heroes']);
  }
}
