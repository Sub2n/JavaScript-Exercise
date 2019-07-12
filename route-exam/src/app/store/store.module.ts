import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './components/store.component';
import { CategoryComponent } from './components/category.component';
import { RankingComponent } from './components/ranking.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StoreComponent, CategoryComponent, RankingComponent],
  imports: [CommonModule, SharedModule, StoreRoutingModule]
  })
export class StoreModule {}
