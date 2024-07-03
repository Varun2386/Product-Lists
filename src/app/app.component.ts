import { Component, OnInit } from '@angular/core';
import { IProduct } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  cartItems: Array<IProduct> = [];
  isCartSelected: boolean = false;
  isShopSelected: boolean = true;


  ngOnInit(): void {
    localStorage.clear();
  }

  getCartItems(cartItems: Array<IProduct>){
    this.cartItems = cartItems;
    localStorage.setItem('cartDetails', JSON.stringify(this.cartItems));
    }

  onCartClick(){
    this.isShopSelected = false;
  }
  
  onShopClick(){
    this.cartItems = localStorage.getItem('cartDetails') ? JSON.parse(<any>localStorage.getItem('cartDetails')) : [];
    this.isShopSelected = true;
  }
}
