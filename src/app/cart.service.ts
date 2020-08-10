import { Injectable } from '@angular/core';

// inject the HttpClient service into your service so your app can fetch data
// and interact with external APIs and resources
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // define an items property to store the array of the current products in the cart
  items = [];

  // Inject HttpClient into the CartService constructor
  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // uses the HttpClient get() method to retrieve the shipping data
  getShippingPrices() {
    return this.http.get('./assets/shipping.json');
  }
}
