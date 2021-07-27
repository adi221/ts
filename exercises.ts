//*--------------------- Exercise 1 (Basic Types) ---------------------*//

type bankAccountType = {
  money: number;
  deposit: (value: number) => void;
};

let bankAccount: bankAccountType = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: {
  name: string;
  bankAccount: bankAccountType;
  hobbies: string[];
} = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);

//*--------------------- Exercise 2 (Es6 Features) ---------------------*//

const double = value => {
  return value * 2;
};
console.log(double(10));

const greet = (name = 'Max') => {
  console.log(`Hello, ${name}`);
};
greet();
greet('Anna');

const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

const newArray = [...numbers, ...[55, 20]];
console.log(newArray);

const [result1, result2, result3] = [3.89, 2.99, 1.38];
console.log(result1, result2, result3);

const { firstName, experience } = { firstName: 'Will', experience: 12 };
console.log(firstName, experience);

//*--------------------- Exercise 3 (Classes) ---------------------*//

// 1
class Car {
  public acceleration: number = 0;

  constructor(public name: string) {}

  public honk() {
    console.log('Toooooooooot!');
  }

  public accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// 2
abstract class BaseObject {
  width: number = 0;
  length: number = 0;

  abstract calcSize(): number;
}

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;

console.log(rectangle.calcSize());

// 3
class Human {
  private _firstName: string = '';

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}

const human = new Human();
console.log(human.firstName);
human.firstName = 'TK';
console.log(human.firstName);
human.firstName = 'Towhid';
console.log(human.firstName);
