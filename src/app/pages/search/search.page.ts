import { Component } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movies } from 'src/app/shared/models/movies-data.model';
import { SearchMovies, ResultSearch } from '../../shared/models/search-movies.model';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../../shared/modals/details/details.component';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  textSearch = '';
  movies: ResultSearch[] = [];
  ideas = ['Spiderman', 'Batman', '1917', 'Parasite', 'Klaus'];
  flagSpinner = false;
  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  onSearchMovie(event) {
    const valueSearch = event.detail.value;

    if (valueSearch.trim() === '' || valueSearch.length === 0) {
      this.movies = [];
      console.log('String vacio');
      return;
    }
    this.flagSpinner = true;
    this.moviesService.getSearch(valueSearch).subscribe( resp => {
      this.movies = resp.results;
      this.flagSpinner = false;
    }, error => this.flagSpinner =  false);
  }

  async showDetails(IDMovie: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        idMovie: IDMovie
      }
    });

    modal.present();
  }
}
