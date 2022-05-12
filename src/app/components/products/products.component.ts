import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { SwiperComponent } from 'swiper/angular';

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
  limit = 10;
  offset = 0;
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myshoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts(10,0).subscribe((data) => {
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
    this.productsService.getProductDetail(id).subscribe((dta) => {
      this.toggleProductDetail();
      this.productChoosen = dta;
    });
  }

  @ViewChild('swiper', { static: false })
  swiper!: SwiperComponent;
  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }

  createNewProduct() {
    this.productsService
      .create({
        price: 18000,
        images: [],
        title: 'Hola que hace',
        description: 'que más bebe',
        categoryId: 2,
      })
      .subscribe((data) => {
        console.log('created', data);
        this.products.unshift(data);
      });
  }

  updateProduct(id: string) {
    this.productsService
      .update(id, {
        title: 'Hola que hace',
        description: 'que más bebe',
        categoryId: 2,
      })
      .subscribe((data) => {
        const productIndex = this.products.findIndex(
          (item) => item.id === this.productChoosen.id
        );
        this.products[productIndex] = data;
        this.productChoosen = data;
      });
  }

  deleteProduct(id: string) {
    this.productsService.delete(id).subscribe(() => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChoosen.id
      );
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  // loadMore() {
  //   this.productsService
  //     .getAllProducts(this.limit, this.offset)
  //     .subscribe((data) => {
  //       this.products = this.products.concat(data);
  //       this.offset += this.limit;
  //     });
  // }
}

