import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
  productsz : IProducts = {} as IProducts;
  id : number = 0;

  constructor(private route : ActivatedRoute, private CS: CartService) { }

  addToCartX(){
    this.CS.addToCart(this.productsz);

  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params["id"];
      this.productsz = products[this.id];

    })

  }

}
