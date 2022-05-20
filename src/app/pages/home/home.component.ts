import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  limit = 5;
  offset = 0;
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
  }

  loadMore(){
    this.productsService.getAllProducts(this.limit, this.offset)
    .subscribe((data =>{
      this.products = this.products.concat(data);
      this.offset += this.limit;
    }))
  }

}
