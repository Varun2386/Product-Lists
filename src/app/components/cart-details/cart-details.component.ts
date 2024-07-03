import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../constants';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent implements OnChanges{
  
  
  @Input() cartItems: Array<IProduct> = [];
  totalPrice: number = 0;
  ngOnChanges(): void {
    this.cartItems.forEach((product:IProduct)=>{
      this.totalPrice += product.price * product.addedItems;
    })
  }

  setItemQuantity(val:any,item: IProduct){
    this.totalPrice =0;
    this.cartItems.map((product: IProduct)=> {
      if(product.id === item.id){
        product.addedItems = Number(val.currentTarget.value);
        this.totalPrice += product.price * Number(val.currentTarget.value);
      } else {
        this.totalPrice += product.price * product.addedItems;

      }
    });
    localStorage.setItem('cartDetails', JSON.stringify(this.cartItems));
  }

  removeCartItem(product:IProduct){
let index = this.cartItems.map((item:IProduct)=> {
    return item.id
}).indexOf(product.id);
this.totalPrice-= this.cartItems[index].price * this.cartItems[index].addedItems;
this.cartItems.splice(index, 1);
localStorage.setItem('cartDetails', JSON.stringify(this.cartItems));
  }

}
