import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentquoteComponent } from './components/common/currentquote/currentquote.component';
import { EnterstockComponent } from './components/common/enterstock/enterstock.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SentimentComponent } from './components/pages/sentiment/sentiment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sentiment/:symbol', component: SentimentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
