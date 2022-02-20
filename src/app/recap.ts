const username: string = 'Andres';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 5);

//Esta clase creada
class Carro {
  public modelo: number;
  public color: string;

  constructor(modelo: number, color: string) {
    (this.modelo = modelo), (this.color = color);
  }
}

//Esta es igual a la de arriba
class Persona {
  constructor(public age: number, public lastname: string) {}
}

const nico = new Persona(15, 'Gomez');
