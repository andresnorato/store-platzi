import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Andres';
  age = 18;
  img =
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg';

  buttondisabled = true;

  person = {
    name: 'Andres G',
    age: 12,
    avatar:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
  }


  toggleButton(){
    this.buttondisabled = !this.buttondisabled;
  }


  increaseage(){
    this.person.age += 1;
  }

}
