import * as Circle from './circle';
import { calculateRectangle } from './rectangle';
// import { Component } from '@angular/core'; // Typescript compiler will look in the node_modules folder if the path isn't a relative one

console.log(Circle.PI); // 3.14
console.log(Circle.calculateCircumference(3)); // 9.42
console.log(calculateRectangle(10, 20)); // 200
