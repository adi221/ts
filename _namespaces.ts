namespace MyMath {
  const PI = 3.14;

  export function calculateCircumference(diameter: number): number {
    return diameter * PI;
  }

  export function calculateRectangle(width: number, length: number): number {
    return width * length;
  }

  // Namespaces can be nested too
  export namespace Arithmetic {
    export function add(a: number, b: number): number {
      return a + b;
    }
  }
}

console.log(MyMath.calculateRectangle(10, 20)); // 200
console.log(MyMath.calculateCircumference(3)); // 9.42
console.log(MyMath.Arithmetic.add(1, 2)); // 3
