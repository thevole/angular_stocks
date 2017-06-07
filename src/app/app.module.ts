import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutes
  ],
  providers: [
    StocksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
