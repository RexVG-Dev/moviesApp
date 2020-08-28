import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ComponentsModule,
    SharedModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SearchPage }])
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
