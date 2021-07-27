// Below is the syntax to include namespace imports in Typescript
// The command to compile this file is "node_modules/.bin/tsc app.ts --outFile foo.js" note: you must specify the output file!

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import Arithmetic = MyFancyMath.Arithmetic; // Alias referencing nested namespace

console.log(MyFancyMath.calculateCircumference(3)); // 9.42
console.log(MyFancyMath.calculateRectangle(10, 20)); // 200
console.log(Arithmetic.add(1, 2)); // 3
