import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  imgParent = '';
  token: string = '';

  ngOnInit() {
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.getProfile().subscribe();
    }
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  // register = {
  //   name: '',
  //   email: '',
  //   password: ''
  // }

  // widthImg = 10;
  // nameNg ='juans';

  // names: String[] = ['Andres', 'Camilo', 'Julian']

  // box = {
  //   width: 10,
  //   height: 50,
  //   background: 'red'
  // }

  // products: Product[] = [
  //   {
  //     name: 'EL mejor juguete',
  //     price: 565,
  //     image: 'http://placeimg.com/640/480',
  //     category: 'all',
  //   },
  //   {
  //     name: 'Bicicleta casi nueva',
  //     price: 356,
  //     image: 'http://placeimg.com/640/480'
  //   },
  //   {
  //     name: 'Colleción de albumnes',
  //     price: 34,
  //     image: 'http://placeimg.com/640/480'
  //   },
  //   {
  //     name: 'Mis libros',
  //     price: 23,
  //     image: 'http://placeimg.com/640/480'
  //   },
  //   {
  //     name: 'Casa para perro',
  //     price: 34,
  //     image: 'http://placeimg.com/640/480'
  //   },
  //   {
  //     name: 'Gafas',
  //     price: 3434,
  //     image: 'http://placeimg.com/640/480'
  //   }
  // ]

  // name = 'Andres';
  // age = 18;
  // img =
  //   'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg';

  // buttondisabled = true;

  // person = {
  //   name: '',
  //   age: 18,
  //   avatar:
  //     'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
  // }

  // toggleButton(){
  //   this.buttondisabled = !this.buttondisabled;
  // }

  // increaseage(){
  //   this.person.age += 1;
  // }

  // onScroll(event: Event){
  //   const element = event.target as HTMLElement;
  //   console.log(element.scrollTop)
  // }

  // changeName(event: Event){
  //   const element = event.target as  HTMLInputElement;
  //   this.person.name = element.value;
  //   console.log( element.value);
  // }

  // onRegister(){
  //   console.log(this.register)
  // }
}
