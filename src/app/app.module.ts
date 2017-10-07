import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// MatGrid stuff //TODO: Move the link-grid to a module
import { MatGridListModule } from '@angular/material';
import { LinkGridComponent } from './link-grid/link-grid.component';

// Core Module
import { AppComponent } from './app.component';

// Feature Modules
import { InputformComponent } from './inputform/inputform.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkGridComponent,
    InputformComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'addform',
        component: InputformComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
