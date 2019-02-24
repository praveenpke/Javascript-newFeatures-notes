//cont let
const name = "john"; //cant change

let place = "usa"; //can be changed

console.log(name, place);

const obj = {
  name: "john",
  age: 33
};
obj.name = "james"; //inside members can be changed

const nums = [1, 2, 3, 4];
nums.push(5);

//Regular functions
function say() {
  console.log("Hello");
}

//Arrow functions

const sayHello = () => {
  console.log("this is arrow");
};

sayHello();
//simplified arrow one liner and with template literal
const sayH = name => console.log(`Hello ${name}`);
sayH("pk");

//for each

const fruits = ["Apples", "Oranges", "Grapes"];

fruits.forEach(fruit => {
  console.log(fruit);
});

//Map returns an array again - use to apply a function to all items in array
const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

console.log(singleFruit);

//Filter  --  returns an array filtering out specific item
const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Kite" },
  { id: 3, name: "hank" }
];

const people2 = people.filter(person => person.id !== 2);

console.log(people2);

//spread - destructuring  used for arrays and objects to add additional items

const arr = [1, 2, 3];
const arr2 = [...arr, 4];

console.log(arr2); //returns an array
console.log([arr, 4]); //returns an nested array

const p = {
  name: "bread",
  age: 36
};

const p_new = {
  ...p,
  email: "p@gmail.cm"
};

console.log(p_new);

//classes

class Person {
  constructor() {
    this.name = "john";
    console.log("ran");
  }
}

const Person1 = new Person();

console.log(Person1.name);

//file 1 (file1.js)

// export const k = 'jeff';
// export const nu = [1,2,3];

// export default Person;

//file2 (file2.js)

// import {name,nums} from './file1.js';
// import Person from './file1.js'
