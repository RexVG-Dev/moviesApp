import { Component, OnInit, Input } from '@angular/core';
import { MoviesData, Movies } from '../../shared/models/movies-data.model';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../../shared/modals/details/details.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() recentMovies: Movies[] = [];

  slidesOptions = {
    // initialSlide: 0,
    // direction: 'horizontal',
    // speed: 300,
    // effect: 'slide',
    // spaceBetween: 8,
    slidesPerView: 1.3,
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

    modal.present();
  }

}
