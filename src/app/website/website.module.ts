import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDatailComponent } from './pages/product-datail/product-datail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    NavComponent,
    HighlightDirective,
    HomeComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDatailComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule, SwiperModule],
})
export class WebsiteModule {}
