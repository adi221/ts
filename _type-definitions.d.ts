// Type definition files must be named in a `<NAME>.d.ts` format  

// They can be installed for most popular libraries using this command:

> yarn add -D @types/<LIBRARY_NAME>

// ...Typescript will automatically look inside the `@types` folder in `node_modules` and take
// all the types defined in there into account

// Quick hack to get around type definition errors and just get something working (not recomended):

declare var jQuery: any
