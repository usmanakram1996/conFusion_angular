import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
MatToolbarModule , MatDialogModule , MatCardModule , MatButtonModule , MatSliderModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatSelectModule, MatListModule, MatGridListModule , MatInputModule, MatSlideToggleModule ,
    MatToolbarModule , MatDialogModule , MatCardModule , MatButtonModule , MatSliderModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
