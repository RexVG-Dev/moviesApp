import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../shared/pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop';
import { SlideshowPosterComponent } from './slideshow-poster';
import { SlideshowPopularComponent } from './slideshow-popular';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from '../shared/modals/details/details.component';



@NgModule({
  entryComponents: [
    DetailsComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPopularComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPopularComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SharedModule
  ]
})
export class ComponentsModule { }
