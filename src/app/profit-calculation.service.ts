import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfitCalculationService {

  constructor() { }

  calculateMaxProfit(prices: number[]): {maxProfit: number, buy: {index: number, value: number}, sell: {index: number, value: number}} {
    let minPriceIndex = 0;
    let maxProfit = 0;
    let buyIndex = 0;
    let sellIndex = 0;

    for (let i = 1; i < prices.length; i++) {
      if (prices[i] - prices[minPriceIndex] > maxProfit) {
        maxProfit = prices[i] - prices[minPriceIndex];
        buyIndex = minPriceIndex;
        sellIndex = i;
      }

      if (prices[i] < prices[minPriceIndex]) {
        minPriceIndex = i;
      }
    }

    return {
      maxProfit: maxProfit,
      buy: { index: buyIndex, value: prices[buyIndex] },
      sell: { index: sellIndex, value: prices[sellIndex] }
    };
  }
}