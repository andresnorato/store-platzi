import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product.model';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;
  token: string = '';
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeServices: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.storeServices.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.getAllCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  loginAndGet() {
    this.authService
      .loginAndGet('john@mail.com', 'changeme')
      .subscribe((profile) => {
        this.profile = profile;
      });
  }

  getAllCategories() {
    this.categoriesService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
