import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myshoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ =  this.myCart.asObservable();

  constructor() { }


  addProduct(product: Product){
    this.myshoppingCart.push(product);
    this.myCart.next(this.myshoppingCart);
  }

  getShoppingCart(){
    return this.myshoppingCart;
  }


  getTotal(){
    return this.myshoppingCart.reduce((sum, item)=> sum + item.price, 0)
  }
}
