import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityComponent } from './components/community.component';
import { StoreComponent } from './components/store.component';
import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { PhotoComponent } from './components/photo.component';
import { KnowhowComponent } from './components/knowhow.component';
import { CategoryComponent } from './components/category.component';
import { RankingComponent } from './components/ranking.component';
import { NavigationComponent } from './components/navigation.component';
import { CommunityNavigationComponent } from './components/community-navigation.component';
import { StoreNavigationComponent } from './components/store-navigation.component';
import { NotFoundComponent } from './components/not-found.component';

@NgModule({
  declarations: [
  AppComponent,
  CommunityComponent,
  StoreComponent,
  LoginComponent,
  SignupComponent,
  PhotoComponent,
  KnowhowComponent,
  CategoryComponent,
  RankingComponent,
  NavigationComponent,
  CommunityNavigationComponent,
  StoreNavigationComponent,
  NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule {}
