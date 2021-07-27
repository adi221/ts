// Since `MyFancyMath` namespace exists in other files too, Typescript will merge all the contents of these seperate files under the same namespace
namespace MyFancyMath {
  const PI = 3.14;

  export function calculateCircumference(diameter: number): number {
    return diameter * PI;
  }

  // Nested namespace
  export namespace Arithmetic {
    export function add(a: number, b: number): number {
      return a + b;
    }
  }
}
