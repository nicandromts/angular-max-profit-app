import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.css']
})
export class RouteBComponent {
  result: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.result = navigation?.extras?.state?.data;
  }
}