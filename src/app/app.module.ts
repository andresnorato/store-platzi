import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TransforNumberPipe } from './pipes/transfor-number.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SwiperModule } from 'swiper/angular';
import { TimeInterceptor } from './interceptors/time.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    TransforNumberPipe,
    HighlightDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, SwiperModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
