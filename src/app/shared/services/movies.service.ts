import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesData } from '../models/movies-data.model';
import { environment } from '../../../environments/environment';
import { DetailMovie } from '../models/details-movie.model';
import { CreditsMovie } from '../models/credits-movie.model';
import { SearchMovies } from '../models/search-movies.model';
import { GenresMovie, Genre } from '../models/genres-movies.model';

const URLAPI = environment.urlApi;
const APIKEY = environment.apikey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularsPage = 0;
  genres: Genre[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  private executeQuery<T>( query: string) {
    query = `${URLAPI}${query}`;
    query += `&api_key=${APIKEY}&language=es&include_image_language=es`;
    return this.httpClient.get<T>(query);
  }

  getPopulars() {
    this.popularsPage++;
    const QUERY = `/discover/movie?sort_by=popularity.desc&page=${this.popularsPage}`;
    return this.executeQuery<MoviesData>(QUERY);
  }

  getFeature() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;
    let monthString: string;

    if ( month < 10) {
      monthString = `0${month}`;
    } else {
      monthString = month.toString();
    }

    const initDate = `${today.getFullYear()}-${monthString}-01`;
    const lastDate = `${today.getFullYear()}-${monthString}-${lastDay}`;

    // tslint:disable-next-line:max-line-length
    // return this.httpClient.get<MoviesData>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-01-31&api_key=122ea4fa1f746994abc9f12c4992a315&language=es&include_image_language=es`);
    return this.executeQuery<MoviesData>(`/discover/movie?primary_release_date.gte=${initDate}&primary_release_date.lte=${lastDate}`);
  }

  getDetailsMovie( id: string ) {
    return this.executeQuery<DetailMovie>(`/movie/${id}?a=1`);
  }

  getCreditsMovie(id: string) {
    return this.executeQuery<CreditsMovie>(`/movie/${id}/credits?a=1`);
  }

  getSearch( query: string) {
    return this.executeQuery<SearchMovies>(`/search/movie?query=${query}`);
  }

  getGenres(): Promise<Genre[]> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise( resolve => {
      this.executeQuery<GenresMovie>(`/genre/movie/list?a=1`)
        .subscribe( resp => {
          this.genres = resp.genres;
          resolve(this.genres);
        });
    });

  }
}
