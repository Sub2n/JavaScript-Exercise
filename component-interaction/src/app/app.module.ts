import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBlueDirective } from './text-blue.directive';
import { TextColorDirective } from './text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextBlueDirective,
    TextColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
