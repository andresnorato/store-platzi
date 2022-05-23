import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  template: `<app-products [products]="products" [productId]="productId"></app-products>`,
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryId: string | null = null;
  productId: string | null = null;
  products: Product[] = [];

  constructor(
    private activatedRouteute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRouteute.paramMap
      .pipe(
        switchMap((params) => {
          this.categoryId = params.get('id');
          if (this.categoryId) {
            return this.productsService.getByCategory(this.categoryId);
          }
          return [];
        })
      )
      .subscribe((data) => {
        this.products = data;
      });
      this.activatedRouteute.queryParamMap.subscribe(paramas =>{
        this.productId = paramas.get('product')
        console.log(this.productId)
      })
  }
}
