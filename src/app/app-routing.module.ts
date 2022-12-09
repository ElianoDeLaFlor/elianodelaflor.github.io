import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentquoteComponent } from './components/common/currentquote/currentquote.component';
import { EnterstockComponent } from './components/common/enterstock/enterstock.component';
import { SentimentcardComponent } from './components/common/sentimentcard/sentimentcard.component';

const routes: Routes = [
  { path: '', component: EnterstockComponent },
  { path: 'quote', component: CurrentquoteComponent },
  { path: 'sentiment', component: SentimentcardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
