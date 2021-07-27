//*----------------- TypeScript types -----------------*//

// String
let myName: string = 'TK';

// Number
let myAge: number = 30;

// Any (try not to use this)
let hobbies: any[] = ['cooking', 'sports'];

// Union (multiple types)
let personsAge: number | string = 30;

personsAge = '31'; // pass
personsAge = false; // fail

// Tuples (multiple types in given order)
let adress: [string, number] = ['Fake Street', 123];

// You can use tuples with rest operators too (both these functions are equal):
const printInfo => (name: string, age: number) => console.log(`My name is ${name} and I am ${age} years old!`);
const printInfo => (...info: [string, number]) => console.log(`My name is ${info[0]} and I am ${info[1]} years old!`);

// Enum
// Basically a convenience method, can be used as a hashmap
enum Color {
  Red, // 0
  Green, // 1
  Orange, // 2
  Blue = 100, // 100 (custom value)
  Yellow // 101 (resets again from last value)
}

let myColor: Color = Color.Green;
console.log(myColor); // 1

//*----------------- Functions -----------------*//

// This function can only return a string
function returnName(): string {
  return myName;
}

// This function will return nothing
function sayHello(): void {
  console.log('Hello!');
}

// This function will never return anything (not to be confused with type "void")
function neverReturns(): never {
  throw new Error('Oh No!');
}

// Types in arguments
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

// Function types
// This is saying that the variable `myMultiply` can only be later assigned to a function that follows the supplied schema for argument and return types
let myMultiply: (arg1: number, arg2: number) => number;

myMultiply = sayHello; // fail
myMultiply = multiply; // pass

//*----------------- Objects -----------------*//

let userData = {
  name: 'TK',
  age: 30
};

// This errors out, typescript has infered that the value of `userData` should be an object with the first value being string and second being number
// Below those conditions are met however typescript also requires that the keys don't change
// With functions the argument names aren't important, with objects the keys are
userData = {
  a: 'Sam',
  b: 100
};

// Be explicit
let userData: { name: string; age: number } = {
  name: 'TK',
  age: 30
};

//*----------------- Storing custom types with aliases -----------------*//

// This allows you to re-use a type in multiple places
type myCustomType = {
  data: number[];
  output: (arg1: boolean) => number[];
};

let foo: myCustomType = {
  data: [1, 2, 3],
  // output: function(arg1: boolean): number[] {
  //   return this.data;
  // }
  output(arg1: boolean): number[] {
    return this.data;
  }
};


let bar: myCustomType = {
  data: [4, 5, 6],
  output: function(arg1: boolean): number[] {
    return this.data;
  }
};
