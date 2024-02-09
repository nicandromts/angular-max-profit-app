import { Component } from '@angular/core';
import { ProfitCalculationService } from '../profit-calculation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.css']
})
export class RouteAComponent {
  constructor(private profitCalculationService: ProfitCalculationService, private router: Router) { }

  calculateProfit() {
    const prices = [2500, 30, 200, 6, 100, 3];
    const result = this.profitCalculationService.calculateMaxProfit(prices);
    this.router.navigate(['/route-b'], { state: { data: result } });
  }
}