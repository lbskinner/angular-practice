import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // @Input() decorator indicates the property value passes in from the component's parent, the product list component
  @Input() product;
  // define a property with an @Output() decorator and an instance of EventEmitter()
  // this allows the product-alert component to emit an event when the value of the notify property changes
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
