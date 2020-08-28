import { Component, OnInit } from '@angular/core';
import { Movies } from '../../shared/models/movies-data.model';
import { LocalDataService } from '../../shared/services/local-data.service';
import { DetailMovie } from '../../shared/models/details-movie.model';
import { MoviesService } from '../../shared/services/movies.service';
import { Genre } from '../../shared/models/genres-movies.model';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage implements OnInit {

  listFavorites: DetailMovie[] = [];
  genres: Genre[] = [];
  favByGenre: any[] = [];
  moviesFavFilter: any[] = [];

  constructor(
    private localData: LocalDataService,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {}

  // Metodo para iniciar siempre que entre al componente
  ionViewWillEnter() {
    this.loadFavorites();
  }

  async loadFavorites() {
    this.listFavorites = await this.localData.loadFavorites();
    this.genres = await this.moviesService.getGenres();

    this.moviesByGenre(this.genres, this.listFavorites);
  }

  moviesByGenre(genres: Genre[], movies: DetailMovie[]) {
    this.favByGenre = [];
    this.moviesFavFilter = [];


    genres.forEach(genre => {
      this.favByGenre.push({
        genre: genre.name,
        moviesFav: movies.filter(movieComparation => {
          return movieComparation.genres.find(genreMovie => genreMovie.id === genre.id);
        })
      });
      /*movies.forEach(movie => {
        movie.genres.forEach(genresMovie => {
          if ( genre.id !== genresMovie.id ) {
            this.moviesFavFilter.push(movie);
            // Se repiten las peliculas falta un filtro
          }
        });
      });
      this.favByGenre.push({
        genre: genre.name,
        moviesFav: this.moviesFavFilter
      });*/

    });
  }

}
