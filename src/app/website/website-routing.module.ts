import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDatailComponent } from './pages/product-datail/product-datail.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'product/:id',
          component: ProductDatailComponent,
        },
        {
          path: 'category/:id',
          component: CategoryComponent,
        },
        {
          path: 'notFound',
          component: NotFoundComponent,
        },
        {
          path: 'myCart',
          component: MyCartComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'register',
          component: RegisterComponent,
        },
        {
          path: 'profile',
          component: ProfileComponent,
        },
        {
          path: 'recovery',
          component: RecoveryComponent,
        },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
