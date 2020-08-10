import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // Define a shippingCosts property
  shippingCosts;

  // Inject the cart service in the ShippingComponent constructor
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Set the shippingCosts property using the getShippingPrices() method from the cart service
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
