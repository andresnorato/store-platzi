import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myshoppingCart: Product[] = [];

  constructor() { }


  addProduct(product: Product){
    this.myshoppingCart.push(product);
  }

  getShoppingCart(){
    return this.myshoppingCart;
  }


  getTotal(){
    return this.myshoppingCart.reduce((sum, item)=> sum + item.price, 0)
  }
}
