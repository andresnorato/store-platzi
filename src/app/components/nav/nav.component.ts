import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(
    private storeServices: StoreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.storeServices.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  loginAndGet() {
    this.authService
      .loginAndGet('carlosPlatzi@g.com', 'Platzi')
      .subscribe((profile) => {
        this.profile = profile;
      });
  }
}
