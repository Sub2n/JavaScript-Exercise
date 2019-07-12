import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CommunityRoutingModule } from './community-routing.module';

import { CommunityComponent } from './components/community.component';
import { PhotoComponent } from './components/photo.component';
import { KnowhowComponent } from './components/knowhow.component';

@NgModule({
  declarations: [CommunityComponent, PhotoComponent, KnowhowComponent],
  imports: [CommonModule, SharedModule, CommunityRoutingModule]
  })
export class CommunityModule {}
