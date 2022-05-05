import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
  };

  @Output() addProduct = new EventEmitter<Product>();

  constructor() {}

  onAddToCart() {
    this.addProduct.emit(this.product);
  }
}
