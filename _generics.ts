// Generics allow you to define multiple types when defining a class, function etc to be used as a constraint
// and then to decide which of the allowed ones to use (mix and match) at the time of instantiation...

// It is a convention to define generic types with `<T>` the T is for "type":
// If allowing multiple types then the convention is to use `<U>`

// Simple generic function
function echo<T>(data: T) {
  return data;
}

console.log(echo('TK').length); // 2

// Built in generics
const testResults: Array<number> = [1.94, 2.33];

testResults.push('hey'); // error
testResults.push(5); // pass

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(elem => console.log(elem));
}

printAll<string>(['Apples', 'Bananas']);

// Generic types
const echo2: <T>(data: T) => T = echo;
echo2<string>('Something');

// Generic classes, most of the time when using generics you'll be using them in classes
class SimpleMath<T extends number | string, U extends number | string> {
  basicValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.basicValue * +this.multiplyValue; // `+` at the begining turns strings to numbers
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.basicValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate()); // 200

// Example

const addUID = (obj: object): object => {
  let uid = Math.floor(Math.random() * 80);
  return { ...obj, uid };
};

let docOne = addUID({ age: 15, username: 'Tal' });
docOne.name = 'Adi'; // TS doesnt know about name - Solution is to use generic:

const addUID2 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 80);
  return { ...obj, uid };
};

// with interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'PL',
  data: 'Shaun',
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: 'Shoppping List',
  data: ['Eggs', 'Milk'],
};
