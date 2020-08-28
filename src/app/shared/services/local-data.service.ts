import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DetailMovie } from '../models/details-movie.model';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  moviesStorage: DetailMovie[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) {
    this.loadFavorites();
  }

  async showToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }


  saveMovie( movie: DetailMovie) {

    let exist = false;
    let msj = '';

    for ( const movieTest of this.moviesStorage) {
      if ( movieTest.id === movie.id) {
        exist = true;
        break;
      }
    }

    if ( exist) {
      this.moviesStorage = this.moviesStorage.filter( movieFilter => movieFilter.id !== movie.id);
      msj = 'Removido de favoritos';
    } else {
      this.moviesStorage.push(movie);
      msj = 'Agregada a favoritos';
    }

    this.storage.set('movies', this.moviesStorage);

    this.showToast(msj);

    return !exist;
  }

  async loadFavorites() {
    const favorites = await this.storage.get('movies');
    this.moviesStorage = favorites || [];
    return this.moviesStorage;
  }

  async existMovie( id) {
    id = Number(id);

    await this.loadFavorites();
    const exist = this.moviesStorage.find(movieFind => movieFind.id === id);

    return (exist) ? true : false;
  }
}
