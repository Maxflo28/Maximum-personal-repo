// // log to console

// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = "Hello";
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log([a:1, b:2]);
// console.table({a:1, b:2});

// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');

// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Init var

// PRIMITIVE

// string
// const name = 'john doe';

// console.log(typeof name);

// number
// const age = 45;
// // boolean
// const hasKids = true;
// // null
// const car = null;
// // undefined
// let test;
// // symbol
// const sym = Symbol();

// // Reference types - objects
// // array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// const today = new Date();

// console.log(today);
// console.log(typeof today);



let val; 

// Number to string
val = 5;
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string 
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = '5';




// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed());

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);

val = Math.floor(Math.random() * 20 + 1);

console.log(val);