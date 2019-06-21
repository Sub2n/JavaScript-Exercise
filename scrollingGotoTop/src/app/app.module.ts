import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll.component';
import { ShowScrollDirective } from './show-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent,
    ShowScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
