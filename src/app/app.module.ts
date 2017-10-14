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

// Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { TitleBarComponent } from './title-bar/title-bar.component';


const appRoutes: Routes = [
  {
    path: 'addform',
    component: InputformComponent
  },
  {
    path: '',
    component: LinkGridComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LinkGridComponent,
    InputformComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
