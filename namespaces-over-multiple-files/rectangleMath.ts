// Since `MyFancyMath` namespace exists in other files too, Typescript will merge all the contents of these seperate files under the same namespace
namespace MyFancyMath {
  export function calculateRectangle(width: number, length: number): number {
    return width * length;
  }
}
