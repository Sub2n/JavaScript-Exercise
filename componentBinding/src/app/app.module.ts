import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, AComponent, BComponent, CComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
  })
export class AppModule {}
