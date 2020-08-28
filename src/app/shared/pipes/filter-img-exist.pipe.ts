import { Pipe, PipeTransform } from '@angular/core';
import { DetailMovie } from '../models/details-movie.model';

@Pipe({
  name: 'filterImgExist'
})
export class FilterImgExistPipe implements PipeTransform {

  transform(movies: DetailMovie[]): any[] {
    return movies.filter( movie =>  {
      return movie.backdrop_path;
    });
  }

}
