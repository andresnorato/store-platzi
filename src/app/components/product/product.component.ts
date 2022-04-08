import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product=  {
    id: '',
    price: 0,
    image: '',
    name: ''
  }

  // product: Product = {
  //   id: '1',
  //   name: 'Producto 1',
  //   image: '../../../assets/images/toy.jpg',
  //   price: 200,
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
