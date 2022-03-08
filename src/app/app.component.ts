import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameNg ='juans';


  names = ['Andres', 'Camilo', 'Julian']




  name = 'Andres';
  age = 18;
  img =
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg';

  buttondisabled = true;

  person = {
    name: 'Andres G',
    age: 18,
    avatar:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
  }


  toggleButton(){
    this.buttondisabled = !this.buttondisabled;
  }


  increaseage(){
    this.person.age += 1;
  }


  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as  HTMLInputElement;
    this.person.name = element.value;
    console.log( element.value);
  }


}
