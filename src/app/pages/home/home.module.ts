import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ComponentsModule,
    SharedModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
