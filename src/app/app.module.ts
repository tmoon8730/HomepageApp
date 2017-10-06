import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MatGrid stuff
import { MatGridListModule } from '@angular/material';
import { LinkGridComponent } from './link-grid/link-grid.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkGridComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
