import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommunityModule } from './community/community.module';
import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';

import { NotFoundComponent } from './shared/components/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, CommunityModule, StoreModule, AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule {}
