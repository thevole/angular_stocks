import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

let stocks: Array<string> = ['AAPL', "YHOO", "AMZN", "MSFT", "GOGL", "FB", "TWTR"];

let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  constructor(private http: Http) { }

  get() {
    return stocks.slice();
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

}
