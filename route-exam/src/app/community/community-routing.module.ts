import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './components/community.component';
import { PhotoComponent } from './components/photo.component';
import { KnowhowComponent } from './components/knowhow.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'community', component: CommunityComponent, canActivate: [AuthGuard] },
  { path: 'community/photo', component: PhotoComponent },
  { path: 'community/knowhow', component: KnowhowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
export class CommunityRoutingModule {}
