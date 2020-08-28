import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PopularPipe } from './popular.pipe';
import { FilterImgExistPipe } from './filter-img-exist.pipe';



@NgModule({
  declarations: [ImagePipe, PopularPipe, FilterImgExistPipe],
  exports: [ImagePipe, PopularPipe, FilterImgExistPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
