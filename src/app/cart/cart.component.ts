import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartx: Array<IProducts> = [];
  total:number = 0;


  constructor(private CS : CartService) { }
  clearCart() {
    window.alert('Your cart has been cleared');
    this.cartx = this.CS.clearCart();
  }

  onSubmit() {
    console.warn('Your order has been submitted');
    this.cartx = this.CS.clearCart();
  }

  ngOnInit(): void {
    this.cartx = this.CS.getCart();
    this.total = this.CS.cartTotal();
  }

}
