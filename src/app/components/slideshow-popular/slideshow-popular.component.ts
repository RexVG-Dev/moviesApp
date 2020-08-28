import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from '../../shared/models/movies-data.model';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../../shared/modals/details/details.component';

@Component({
  selector: 'app-slideshow-popular',
  templateUrl: './slideshow-popular.component.html',
  styleUrls: ['./slideshow-popular.component.scss'],
})
export class SlideshowPopularComponent implements OnInit {

  @Input() popularMovies: Movies[] = [];
  @Output() cargarMas = new EventEmitter();

  slidesOptions = {
    // initialSlide: 0,
    // direction: 'horizontal',
    // speed: 300,
    // effect: 'slide',
    spaceBetween: -10,
    slidesPerView: 2.8,
    // slidesPerView: 2.8,
    freeMode: true,
    // loop: true
  };
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onShowMore() {
    this.cargarMas.emit();
  }
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
