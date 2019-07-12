import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation.component';
import { CommunityNavigationComponent } from './components/community-navigation.component';
import { StoreNavigationComponent } from './components/store-navigation.component';

@NgModule({
  declarations: [NavigationComponent, CommunityNavigationComponent, StoreNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, CommunityNavigationComponent, StoreNavigationComponent]
  })
export class SharedModule {}
