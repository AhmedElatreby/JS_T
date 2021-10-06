<!-- @format -->

# This is from the YouTube crash course Traversy Media.

### var, let const

### var is used globely

#### let is used to declare varable, and can be changed

let age = 30;
age = 40;
console.log(age);

### const is used to declear varable and cannot be changed

const name = "Smith";
name = "Mark"; # you can not change the varable
console.log(name);

## alwayes use const unless you going to reassign the value

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

##### to test the data type you use typeof

console.log(typeof rating);

### Concatenation

const name = "Ahmed";
const age = 40;
console.log(`my name is ${name} and I am ${age} `);

#### to count the number of letter

const s = "Hello World!";
console.log(s.length);
console.log(s.toLocaleUpperCase());

# Arrays - variavles holds multiple values

#### you can add diffrent type of data type in array with JS

const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);

#### to access something inside array we do this

console.log(fruits[2]);

#### to added into the array we:

fruits[5] = "Ahmed";

#### the best way to added into the array is to use push

fruits.push("Software");

#### if you want to add into the beginning of the arry we use unshift

fruits.unshift("Hello World!");

#### to remove the list item from the array we use pop

fruits.pop();

#### to check if something is in the array we use Array.isArray(.....)

console.log(Array.isArray(fruits));

### to get the index of array we use indexOf

console.log(fruits.indexOf("Ahmed"));

console.log(fruits);

```
The object literal is one of the most popular patterns for creating objects in JavaScript because of its simplicity. ES6 makes the object literal more succinct and powerful by extending the syntax in some ways.
```

const person = {
firstName: "Ahmed",
lastName: "Ahmed",
age: 40,
hobbies: ["fitness", "fishing", "crossfit"],
adress: {
street: "123 street",
city: "London",
county: "Somewhere",
},
};

- you can add into the object

person.email = "ahmed@email.com";
console.log(person);

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.adress.city);

const {
firstName,
lastName,
adress: { county },
} = person;
console.log(county);

## creating todos list

const todos = [
{
id: 1,
text: "Take out the rubbish",
isCompleted: true,
},
{
id: 2,
text: "Take the kids out",
isCompleted: true,
},
{
id: 3,
text: "do my homework",
isCompleted: false,
},
];

console.log(todos[1].text);

- use the previous example to convert into JSON

const todoJSON = JSON.stringify(todos); // .stringify is used to conver the object to JSON
console.log(todoJSON);

# using For loop

- create for loop to print numbers from 0 to 10

for (let i = 0; i <= 10; i++) {
console.log(`For Loop Number: ${i}`);
}

- using For loop with an array

for (let i = 0; i < todos.length; i++) {
console.log(`to do list: ${todos[i].text}`); // todos, than array[i] followed by . than the object name
}

- there is anothor way to use foor loop to display the same content is (for of loop)

for (let todo of todos) {
console.log(`Today todo list is: ${todo.text}`);
}

# Higher-Order Functions

In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.

A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

- Array Method .forEach()
  The .forEach() method executes a callback function on each of the elements in an array in order.

todos.forEach(function (todo) {
console.log(`Today todos list is: ${todo.text}`);
});

- Array Method .map()
  The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

const todaoText = todos.map(function (todo) {
return todo.text;
});
console.log(`Today todos list is: ${todaoText}`);

- Array Method .filter()
  The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

  const todoCompleted = todos
  .filter(function (todo) {
  return todo.isCompleted == true;
  })
  .map(function (todo) {
  return todo.text;
  }); // you can add for map into the filter loop to get more information
  console.log(`Today todos list is: ${todoCompleted}`);
  console.log(todoCompleted);

## While Loop

let i = 0;
while (i < 10) {
console.log(`While Loop Number: ${i}`);
i++;
}
