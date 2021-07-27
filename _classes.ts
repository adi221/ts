//*---------------------------------------- Classes ----------------------------------------*//

class Person {
  // Unlikes es6, with typescript you set properties like this directly in classes without using the `this` keyword or putting them in the constructor
  public name: string; // default scope is `public` which allows the property to be accessible from the outside
  private type: string = 'human'; // `private` properties can only be accessed from within this exact class. Not any child classes that extend from it
  protected age: number = 30; // `protected` properties are the same as private except they can also be accessed from child classes that extend from this one

  // `readonly` properties can be retrived from the outside but not set (when instantiated), they can be set and changed within the class though
  public readonly gender: string = 'male';

  // "public username: string" is a shortcut
  // It says not only expect to get a `username` argument in the constructor, but also set it as a public property in the class afterwards (can be `private` or `protected` too)
  constructor(name: string, public username: string) {
    // This line can be replaced by putting the "public name: string" shortcut as the first argument in the constructor above
    this.name = name; // `this.name` refers to the property set up in the class earlier, `name` refers to the argument passed into the constructor
  }

  printAge() {
    console.log(this.age);
  }

  // Methods can also be public, private or protected
  public setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('TK', 'tkpop777');

console.log(person.name, person.username); // TK, tkpop777

person.printAge(); // 30

// console.log(person.type); // TS will throw an error during compile time because `type` is a private property

person.setType('Cool guy!'); // Cool guy!

// person.gender = 'female'; // Error because gener is read only

console.log(person.gender); // male

//*---------------------------------------- Getters and Setters ----------------------------------------*//

// With getters and setters you can set your properties up as private or protected and only allow them to be set or gotten after custom transforms or validations

class Plant {
  private plantSpecies: string = 'Default';

  // `getters` can be used to transform a property before accessing it
  get species() {
    return `The species is ${this.plantSpecies}`;
  }

  // `setters` can be used to transform a property before setting it
  set species(value: string) {
    if (value.length > 3) {
      this.plantSpecies = value;
    } else {
      this.plantSpecies = 'Default';
    }
  }
}

const plant = new Plant();

// getter methods are called like properties without the `()` at the end
console.log(plant.species); // Default

plant.species = 'AB';
console.log(plant.species); // Default, it didn't get set to "AB" because it's only 2 characters long

plant.species = 'Lily Pad';
console.log(plant.species); // Lily Pad

//*---------------------------------------- Static Properties and Methods ----------------------------------------*//

// Static properties and methods are accessible from a class even without neededing to instantiate it
// A good use case would be utlity helper classes

class Helpers {
  static PI: number = 3.14;

  static calculateCircumfrance(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(Helpers.PI); // 3.14
console.log(Helpers.calculateCircumfrance(8)); // 25.12

//*---------------------------------------- Abstract Classes ----------------------------------------*//

// Abstract classes cannot be instantiated directly, you must always inherit from them and instantiate the inherited class instead
// They are just there to be inherited from. They are to be used as blueprints

abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  // `abstract` methods are required methods that need to be implemented once the abstracted class is instantiated
  // Below method is a function schema set up for validation purposes, it's not logic that's implemented like the `calcBudget` method below
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class LandscapeProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const landscapeProject = new LandscapeProject();

console.log(landscapeProject.projectName); // Default

landscapeProject.changeName('Koi Pond Project');

console.log(landscapeProject.projectName); // Koi Pond Project

//*---------------------------------------- Singleton Classes ----------------------------------------*//

// These are classes which can only be instantiated once
// Here's the cryptic suntax for that (flew over my head):

class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The only one!');
    }
    return OnlyOne.instance;
  }
}

// const wrong = new OnlyOne('The only one!');
const right = OnlyOne.getInstance();
