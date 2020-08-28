import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movies } from '../../shared/models/movies-data.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  recentMovies: Movies[] = [];

  listPopular: Movies[] = [];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getFeature().subscribe((resp) => {
      this.recentMovies = resp.results;
    });

    this.getPopulars();
  }

  cargarMas() {
    this.getPopulars();
  }

  getPopulars() {
    this.moviesService.getPopulars().subscribe( (resp) => {
      // this.listPopular = resp.results;
      const temporalArray = [...this.listPopular, ...resp.results];
      // this.listPopular.push(...resp.results);
      this.listPopular = temporalArray;
    });
  }

}
