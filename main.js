/** @format */

// creating todos list
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

// Higher-Order array method
const todoCompleted = todos
	.filter(function (todo) {
		return todo.isCompleted == true;
	})
	.map(function (todo) {
		return todo.text;
	}); // you can add for map into the filter loop to get more information
console.log(` Today todos list is: ${todoCompleted} `);
console.log(todoCompleted);
