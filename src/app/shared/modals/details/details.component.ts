import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { DetailMovie } from '../../models/details-movie.model';
import { Cast } from '../../models/credits-movie.model';
import { ModalController } from '@ionic/angular';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() idMovie;

  movie: DetailMovie = {};
  actors: Cast[] = [];
  oculto = 150;
  iconStar = 'star-outline';

  slideOptActors: {
    spaceBetween: -5,
    slidesPerView: 3.3,
    freeMode: true
  };

  slidesOptActors = {
    spaceBetween: -5,
    slidesPerView: 3.3,
    freeMode: true
  };


  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private localData: LocalDataService
    ) { }

  async ngOnInit() {
    // Comprobar la existencia de pelicula en favoritos con async
    // const exist = await this.localData.existMovie(this.idMovie);

    this.localData.existMovie(this.idMovie).then( validExist => this.iconStar = (validExist) ? 'star' : 'star-outline');

    this.moviesService.getDetailsMovie(this.idMovie).subscribe( (resp) => {
      console.log(resp);
      this.movie = resp;
    });

    this.moviesService.getCreditsMovie(this.idMovie).subscribe( (resp) => {
      console.log('Response:', resp);
      this.actors = resp.cast;
    });
  }

  onBack() {
    this.modalCtrl.dismiss();
  }

  onAddFavorites() {
    // Llamada al servicio
    // this.localData.saveMovie(this.movie);

    // Uso de llamada al servcio para verificar el status de favorito
    const validExist = this.localData.saveMovie(this.movie);
    this.iconStar = (validExist) ? 'star' : 'star-outline';
  }

}
