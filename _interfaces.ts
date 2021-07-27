//*---------------------------------------- Interfaces ----------------------------------------*//

// Interfaces define the schema of a data structure, once defined they can be used in multiple places
// [IMPORTANT] They don't get compiled at all, they are only there to give you errors at build time

interface PersonInterface {
  name: string;
  job?: string; // `?` denotes optional field
  [keyName: string]: any; // This is how to define unknown keys, `keyName` is generic (can name this anything) and type is `any` (if you atleast know the type to expect be explicit)
  breathe(air: string): void; // Function type definition
}

function greet(person: PersonInterface) {
  console.log(`Hello ${person.name}`);
}

function changeName(person: PersonInterface) {
  person.name = 'Anna';
}

const person2: PersonInterface = {
  name: 'Adi',
  job: 'Policeman',
  age: '2',
  hobbies: [1, 2, 4, 3],
  breathe(air) {
    console.log(air);
  },
};

const person = {
  name: 'TK', // If `name` was missing or of not type string the compiler would throw an error

  // This property isn't in the interface but it's ok to be here, the interface only defines what NEEDS to exist
  // However if you were to pass this object directly as an argument to the `greet()` function, it would throw an error due to the stricter check Typescript does
  // In that case you can't have extra properties in the argument that aren't defined in the interface!
  age: 30,

  hobbies: ['Cooking', 'Sports'], // Will pass due to the unknown "keyName" entry in the iterface

  breathe(air = 'cool') {
    console.log(air);
  },
};

greet(person); // Hello TK
changeName(person);
greet(person); // Hello Anna
person.breathe('hot'); // hot

//*---------------------------------------- Using Interfaces With Classes ----------------------------------------*//

// Just use the `implements` keyword

class Person implements PersonInterface {
  name = 'John';
  age = 36;

  breathe(air = 'cool') {
    console.log(`${this.name} breathes ${air} air`);
  }
}

const newPerson = new Person();
newPerson.name = 'TK';
newPerson.breathe('kk'); // TK breathes cool air

//*---------------------------------------- Using Interfaces With Functions ----------------------------------------*//

interface DoubleValueFunc {
  (num1: number, num2: number): number;
}

const myDoubleFunc: DoubleValueFunc = function (
  num1: number,
  num2: number
): number {
  return (num1 + num2) * 2;
};

console.log(myDoubleFunc(10, 20)); // 60

//*---------------------------------------- Interface Inheritence ----------------------------------------*//

// Just use the `extends` keyword similar to when extending classes

interface CoolPersonInterface extends PersonInterface {
  isCool: boolean;
}

const coolPerson: CoolPersonInterface = {
  name: 'James',
  isCool: true,
  breathe(air = 'cool') {
    console.log(air);
  },
};

console.log(coolPerson); // Object
