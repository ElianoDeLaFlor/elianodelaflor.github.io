import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterstockComponent } from './components/common/enterstock/enterstock.component';
import { CurrentquoteComponent } from './components/common/currentquote/currentquote.component';
import { SentimentcardComponent } from './components/common/sentimentcard/sentimentcard.component';
import { FormsModule } from '@angular/forms';
import { UtilityService } from './components/services/utility.service';
import { HomeComponent } from './components/pages/home/home.component';
import { QuoteService } from './components/services/quote.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SentimentComponent } from './components/pages/sentiment/sentiment.component';
import { SentimentService } from './components/services/sentiment.service';
import { MonthPipe } from './components/pipes/month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnterstockComponent,
    CurrentquoteComponent,
    SentimentcardComponent,
    HomeComponent,
    SentimentComponent,
    MonthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UtilityService, QuoteService, HttpClient, SentimentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
