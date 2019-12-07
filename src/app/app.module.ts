import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LampenComponent } from './lampen/lampen.component';
// import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';
// import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    LampenComponent
    // ConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
