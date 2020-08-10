import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // Define the items property to store the products in the cart
  items;

  // Inject the CartService so that the cart component can use it
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Set the items using the cart service's getItems() method from CartService
    this.items = this.cartService.getItems();
  }
}
