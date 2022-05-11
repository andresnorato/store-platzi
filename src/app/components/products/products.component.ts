import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  total = 0;
  myshoppingCart: Product[] = [];
  products: Product[] = [];
  date = new Date('2021 2, 30');
  showProductDetail: boolean = false;
  productChoosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  };

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myshoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddtoShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productsService
      .getProductDetail(id)
      .subscribe((dta) => {
        this.toggleProductDetail();
        this.productChoosen = dta;
      });
  }
}
