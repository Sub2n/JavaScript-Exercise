import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { IncreaseComponent } from './increase.component';
import { DecreaseComponent } from './decrease.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncreaseComponent,
    DecreaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
