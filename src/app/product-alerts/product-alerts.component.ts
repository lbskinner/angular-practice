import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // @Input() decorator indicates the property value passes in from the component's parent, the product list component
  @Input() product;

  constructor() {}

  ngOnInit(): void {}
}
