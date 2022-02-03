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



// let val; 

// // Number to string
// val = 5;
// val = String(4+4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string 
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to number
// val = '5';




// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// // console.log(val.toFixed());

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);


// const firstName = 'William';
// const lastName = 'Johnson';

// let val;

// val = firstName + lastName;

// // Concatenation

// val = firstName + ' Supreme ' + lastName;

// console.log(val);


// // Append
// val = 'Brad ';
// val += 'Traversy';
// age = 29;
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // concat
// val = firstName.concat(' ', lastName);

// console.log(val);

// // Change case
// val = firstName.toUpperCase();


// const name = 'John';
// const age = 29;
// const job = 'Web Developer';
// const city = 'Miami';

// // Without template strings (es5)

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>City: ' + city + '</li><ul>'; 

// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City=: ' + city + '</li>' +
//         '</ul>';

// function hello(){
//   return 'hello';
// }

// // With template strings (es6)
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li${2 + 2}</li>
//     <li${hello()}</li>

//   </ul>
// `; 



// document.body.innerHTML = html;


// Create some arrays
// const numbers = [4, 2, 6, 9];
// const numbers2 = new Array(11, 22, 343);
// const fruit = [apple. orange. grapes];
// const mixed = [22, 'hello', true, undefined, null, new Date()];

// let val;

// // get array length
// val = numbers.length;
// // check if is array
// val = Array.isArray(numbers);

// console.log(numbers);
// console.log(val);


// // Mutating Arrays
// // Add on to end
// numbers.push(numbers);
// // Add to front
// numbers.unshift(2);
// // Take off from front
// numbers.shift();
// // Splice values 
// numbers.splice(1,1) //(START, END)

// // Reverse sort
// val = numbers.sort(function(x, y){
  
// })

// Window Methods / Objects / Properties

// ALERT
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// let val;

//  //Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;
// console.log(val);


// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;


// // Redirect
// window.location.href = 'http://google.com';
// // Reload
// window.location.reload();

// console.log(val);

// History Object

// window.history.go();

// console.log(val);


// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }


// // test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(let a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

// console.log('Global Scope: ', a, b, c);


