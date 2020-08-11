import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // Define the items property to store the products in the cart
  items;
  // define the checkoutForm property to store the form model
  checkoutForm;

  // Inject the CartService so that the cart component can use it
  // Inject the FormBuilder service
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    // use the FormBuilder group() method
    // to set the checkoutForm property with a form model containing name and address fields
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    // Set the items using the cart service's getItems() method from CartService
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // process checkout data here
    // Use the CartService clearCart() method to empty the cart items
    this.items = this.cartService.clearCart();
    // reset the form after its submission
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
