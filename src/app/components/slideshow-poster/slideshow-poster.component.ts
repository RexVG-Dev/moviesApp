import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from 'src/app/shared/models/movies-data.model';
import { DetailsComponent } from '../../shared/modals/details/details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() posterMovies: Movies[] = [];
  @Output() reloadFavorite = new EventEmitter();

  slidesOptions = {
    // initialSlide: 0,
    // direction: 'horizontal',
    // speed: 300,
    // effect: 'slide',
    // spaceBetween: 8,
    slidesPerView: 1.8,
    // slidesPerView: 2.8,
    freeMode: true,
    // loop: true
  };

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async onDetails(IDmovie: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        idMovie: IDmovie
      }
    });

    await modal.present();

    await modal.onWillDismiss(); // para esperar que el modal se cierre
    this.reloadFavorite.emit(); // Llama al evento en el padre para realizar la actualizacion de la lista

  }

}
