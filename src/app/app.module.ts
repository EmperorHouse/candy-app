import { CandyDataService } from './candy-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandyListComponent } from './candy-list/candy-list.component';
import { HeaderComponent } from './header/header.component';
import { CandyFormComponent } from './candy-form/candy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CandyListComponent,
    HeaderComponent,
    CandyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CandyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
