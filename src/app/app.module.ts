import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterstockComponent } from './components/common/enterstock/enterstock.component';
import { CurrentquoteComponent } from './components/common/currentquote/currentquote.component';
import { SentimentcardComponent } from './components/common/sentimentcard/sentimentcard.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterstockComponent,
    CurrentquoteComponent,
    SentimentcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
