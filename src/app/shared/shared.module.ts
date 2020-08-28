import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './modals';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    DetailsComponent
  ]
})
export class SharedModule { }
