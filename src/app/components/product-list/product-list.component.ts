import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../services/htpp-service';
import { BASEURL, IProduct, IProductList, } from '../../../constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  $products: Observable<IProductList> | undefined;
  cartProducts: Array<IProduct> = [];
  @Output() updateCartItems = new EventEmitter<Array<IProduct>>();
  constructor(private httpSvc: HttpService) { }

  ngOnInit(): void {
    let url = `${BASEURL}/products?skip=0&limit=50`;
    this.$products = this.httpSvc.getData(url);
  }

  addToCart(cartProduct: IProduct) {
    let productFound: boolean = false;
    if(localStorage.getItem('cartDetails')) {
    this.cartProducts = JSON.parse(<any>localStorage.getItem('cartDetails'))
    }
    if (this.cartProducts.length > 0) {
      this.cartProducts.map((product: IProduct) => {
        if (product.id === cartProduct.id) {
          product.addedItems++ ;
          productFound = true;
        } 
      })
      if(!productFound){
        cartProduct.addedItems =1;
      this.cartProducts.push(cartProduct);
      }
    } else {
      cartProduct.addedItems =1;
      this.cartProducts.push(cartProduct);
    }
    this.updateCartItems.emit(this.cartProducts);
  }
}
