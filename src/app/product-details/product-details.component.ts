import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // define the product property
  product;

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  // The ActivatedRoute is specific to each routed component that the Angular Router loads.
  // It contains information about the route, its parameters, and additional data associated with the route.
  // inject the ActivatedRoute into the constructor by adding it as an argument within the constructor's parentheses
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  //subscribe to route parameters and fetch the product based on the productId
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // The route parameters correspond to the path variables you define in the route
      this.product = products[+params.get('productId')];
    });
  }
}
