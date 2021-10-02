<!-- @format -->

# This is from the YouTube crash course Traversy Media.

# var, let const

# var is used globely

# let is used to declare varable, and can be changed

let age = 30;
age = 40;
console.log(age);

# const is used to declear varable and cannot be changed

const name = "Smith";
name = "Mark"; # you can not change the varable
console.log(name);

# alwayes use const unless you going to reassign the value

# Data type

- String
- numbers
- boolean
- null
- undefined
- symbol added in es06

const name = "Ahmed";
const age = 40;
const rating = 4.5;
const isCold = true;
const x = null;
const y = undefined;
let z;

# to test the data type you use typeof

console.log(typeof rating);

# Concatenation

const name = "Ahmed";
const age = 40;
console.log(`my name is ${name} and I am ${age} `);

# to count the number of letter

const s = "Hello World!";
console.log(s.length);
console.log(s.toLocaleUpperCase());

# Arrays - variavles holds multiple values

# you can add diffrent type of data type in array with JS

const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);

# to access something inside array we do this

console.log(fruits[2]);

# to added into the array we:

fruits[5] = "Ahmed";

# the best way to added into the array is to use push

fruits.push("Software");

# if you want to add into the beginning of the arry we use unshift

fruits.unshift("Hello World!");

# to remove the list item from the array we use pop

fruits.pop();

# to check if something is in the array we use Array.isArray(.....)

console.log(Array.isArray(fruits));

# to get the index of array we use indexOf

console.log(fruits.indexOf("Ahmed"));

console.log(fruits);
