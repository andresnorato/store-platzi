import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TransforNumberPipe } from './pipes/transfor-number.pipe';
import { ImgComponent } from '../shared/components/img/img.component';
import { ProductComponent } from '../shared/components/product/product.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    ReversePipe,
    TimeAgoPipe,
    TransforNumberPipe,
    ProductComponent,
    ProductsComponent,
    ImgComponent,
  ],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports: [
    ReversePipe,
    TimeAgoPipe,
    TransforNumberPipe,
    ProductComponent,
    ProductsComponent,
    ImgComponent,
  ],
})
export class SharedModule {}
