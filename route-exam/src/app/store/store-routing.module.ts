import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './components/store.component';
import { CategoryComponent } from './components/category.component';
import { RankingComponent } from './components/ranking.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'store/category', component: CategoryComponent },
  { path: 'store/ranking', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
export class StoreRoutingModule {}
