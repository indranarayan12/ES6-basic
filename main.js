// CONST & LET

const names = ["karen", "sharon", "flaron"];
names.push("daren"); // appending values allowed but but reassigning not
//console.log(names);

let name = ["baren", "caren"];
name = ["faren"]; // reassign allowed
//console.log(name);

// ARROW FUNCTIONS

function sayHello() {
  console.log("hello");
}

//sayHello();

const hello = (name, shame) => {
  console.log(`helloe ${name}, hou u doin ${shame}`);
};

//hello("sharon", "karen");

// FOREACH

names.forEach((name, index) => {
  //console.log(name, index);
});

// MAP

const mapTest = names.map(
  name =>
    //name.slice(0, name.length).toLocaleUpperCase()
    name[0].toLocaleUpperCase() + name.slice(1, name.length)
);
//console.log(mapTest);

// FILTER

const myFilter = names.filter(name => name != "karen");
//console.log(myFilter);

// SPREAD

const spread1 = [1, 2, 3, 4];
const spread2 = [...spread1, 5];
//console.log(spread2);

// DESTRUCTURING

const dest = {
  name1: "destruction",
  place: "of your life,",
  motive: " give me break"
};

var { name1, place, motive } = dest; //variable names must match the key values
//console.log(name1, place, motive);

// CLASSES

class estuto {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
  cState() {
    return `happy to see you enjoying your ${this.food} marinated in ${
      this.drink
    }`;
  }
}

var estuto1 = new estuto("roasted depression", "humiliation");

//console.log(estuto1.cState());

// SUBCLASSES

class sstuto extends estuto {
  constructor(food, drink, desert) {
    super(food, drink);
    this.desert = desert;
  }
  cInfo() {
    return `happy to see you enjoying your ${this.food} marinated in ${
      this.drink
    }, ${this.desert}`;
  }
}

var sstuto1 = new sstuto(
  "roasted depression",
  "humiliation",
  "so long howdy partnerr"
);

console.log(sstuto1.cInfo());

// MODULES

//file 1 (file1.js)
//export const name4 = 'keff';
//export const num4 = [1,2,2,3];

//export default ClassName;

//file 2 (file2.js)
//import {name4, num4} from './file1';
//import ClassName from './file1';
