import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if ( !img) {
      return environment.noImgPath;
    }

    const imgUrl = `${URL}${size}${img}`;

    return imgUrl;
  }

}
