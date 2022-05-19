import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  total = 0;
  myshoppingCart: Product[] = [];
  @Input() products: Product[] = [];
  @Output() onloadMore = new EventEmitter<string>();

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

  statusDetail: 'loading' | 'succes' | 'error' | 'init' = 'init';

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myshoppingCart = this.storeService.getShoppingCart();
  }

  onAddtoShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.productsService.getProductDetail(id).subscribe(
      (dta) => {
        this.toggleProductDetail();
        this.productChoosen = dta;
        this.statusDetail = 'succes';
      },
      (errorMessage) => {
        alert(errorMessage);
        this.statusDetail = 'error';
      }
    );
  }

  readAndUpdate(id: string) {
    this.productsService
      .getProductDetail(id)
      .pipe(
        switchMap((product) =>
          this.productsService.update(product.id, { title: 'Change' })
        )
      )
      .subscribe((rtaUpdate) => {
        console.log(rtaUpdate);
      });

    this.productsService
      .fetchReadAndUp0date('1', { title: 'Juan' })
      .subscribe((response) => {
        const read = response[0];
        const update = response[1];
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

  loadMore() {
    this.onloadMore.emit();
  }
}
