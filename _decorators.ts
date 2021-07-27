//*---------------------------------------- Decorators ----------------------------------------*//

// A decorator is just function that you can attach to a class, to use them the `experimentalDecorators` must be set to true in tsconfig
// Typescript automatically sends the constructor of the attached class as an argument to the decorator
// A class can have multiple decorators

function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log('Hi');
  }
}

//*---------------------------------------- Factory ----------------------------------------*//

// Factories act as middlewares between your class and a decorator, this way you can use decorators conditionally
// You can use factories on any decorator

function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {}

//*---------------------------------------- Useful Decorator Example ----------------------------------------*//

// This decorator will add the `print()` method to any class decorated with it, which can be very useful!
// But you must cast it to type `any` when calling it otherwise TS will not recognize that it exists even though it does (might have just been a workaround for a bug at the time of the tutorial)

function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@printable
class Plant {} // `someClass.print()` exists now

// Usesage

const plant = new Plant();
// (<any>plant).print(); // must be called like this

//*---------------------------------------- Method Decorators ----------------------------------------*//

// Following is an example of using a decorator (with factory) on a method, it flew over my head but in this example this decorator can be used
// ...to either allow or dis-allow certain methods from being overwritable

function editable(value: boolean) {
  // `target`, `propName` and `descriptor` are always the 3 arguments TS passes into this return function
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

class Project {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calculateBudget() {
    console.log(1000);
  }
}

const project = new Project('Super project');
project.calculateBudget(); // 1000
project.calculateBudget = () => console.log(2000); // Without the decorator this would have worked
project.calculateBudget(); // 1000 (without the decorator this would have printed "2000")

//*---------------------------------------- Parameter Decorators ----------------------------------------*//

function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('methodName: ', methodName);
  console.log('paramIndex: ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Attach a decorator to a param like below `@printInfo printAll`
  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(1000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('Super course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
