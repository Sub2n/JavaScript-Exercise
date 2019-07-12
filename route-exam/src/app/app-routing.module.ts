import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './components/community.component';
import { StoreComponent } from './components/store.component';
import { PhotoComponent } from './components/photo.component';
import { KnowhowComponent } from './components/knowhow.component';
import { CategoryComponent } from './components/category.component';
import { RankingComponent } from './components/ranking.component';
import { NotFoundComponent } from './components/not-found.component';
import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';

const routes: Routes = [
  { path: '', component: CommunityComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'community/photo', component: PhotoComponent },
  { path: 'community/knowhow', component: KnowhowComponent },
  { path: 'store', component: StoreComponent },
  { path: 'store/category', component: CategoryComponent },
  { path: 'store/ranking', component: RankingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule {}
