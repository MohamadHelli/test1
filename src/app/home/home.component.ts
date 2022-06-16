import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsx : IProducts[] = products;


  constructor() { }

  ngOnInit(): void {
  }

}
