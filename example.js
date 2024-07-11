//function declaration
function singHappyBirthday(){
    console.log("happy birthday to you...")
}
singHappyBirthday();
//ex-2(sum of two number)
function sumA(num1,num2){
    return(num1+num2)

}
console.log(sumA(3,5))
//ex-3(odd or even)
function isEven(num){
return num%2===0;

    }
console.log(isEven(9))

// ex-4'
function greet(name) {
    console.log(`Hello ${name}`);
}
// pass argument to the function
greet("vanshika");



//function expression
const firstChar = function(anyString){
    return anyString[0];
}
 const findTarget=function (array,target){
for(let i=0;i<array.length;i++){
    if (array[i]===target){
        return i;
}
}
return -1;
}
const myArray=[1,2,9,8]
const ans = findTarget(myArray,2);
console.log(ans)

//ex-2
let square=function(num) {
    return num*num;
}
console.log(square(9));

//arrow function 
let sum = (a, b) => a + b;

console.log( sum(1, 2) );
//ex-1
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));

//ex-2
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x * x);
console.log(squares); 

//ex-3
const app=() =>{
    const myFunc= ()=> {
        console.log("hello from me")
    }
    const addTwo = (num1,num2)=>{
        return num1+num2;

    }
    const mul = (num1,num2)=>num1*num2;
    myFunc();
    console.log(addTwo(2,30));
    console.log(mul(2,5));

}
 app();

 //default parameter
 function addTwo(a=0,b=0){
    
    return a+b;
 }
 console.log (addTwo());

 //ex-2
 function greet(name = 'guest'){
    return`hello,${name}!`;
 }
console.log(greet());
console.log(greet('alice'));
 //rest parameter
 function myFun(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`miss's`);
 }
 myFun(3,2,5,4,5,8,6);

 //add all
 function addAll(...number1){
    let total=0;
    for(let number of number1){
        total=total+number;
    }
    return total;
 }
 const anss = addAll(12,5,4,9);
 console.log(anss);

 //returning a number
 let n=[1,2,4,9,75];
 let doubled= n.map(n=>n*2);
 console.log(doubled);

 //destructuring parameter
 function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
const userTwo={
    firstName: 'vanshika',
    lastName:'jain',
    age:20
};

console.log(getFullName(user));
console.log(getFullName(userTwo)); 
//ex-2

// Object destructuring in function parameters
function printPerson({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  }
  
  const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  printPerson(person); 
  
  // Example 3: Array destructuring in function parameters
function printCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
  }
  
  const coordinates = [10, 20];
  printCoordinates(coordinates); 

// naming convention 
 //ex-1
  function fetchUserData(userId) {
   
    return {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
  }
  

  const userId = fetchUserData();
  console.log(userId);
  
  //pure function
  function add(a, b) {
    return a + b;
  }
  
  console.log(add(9, 3)); 
  console.log(add(9, 3));
  console.log(add(9, 3));
  console.log(add(9, 3));
//ex
  function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  
  
  console.log(calculateAreaOfCircle(6)); 
  console.log(calculateAreaOfCircle(6));
  
 
  //ex-
  function applyOperation(a, b, operation) {
    return operation(a, b);
  }

  const added = (x, y) => x + y;
  const multiply = (x, y) => x * y;
  
  console.log(applyOperation(5, 3, added));       
  console.log(applyOperation(5, 3, multiply));

  //ex
  function createMultiplier(multiplier) {
    return function (x) {
      return x * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); 
  console.log(triple(5)); 
  
  //error handling
  function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    console.log(divide(4, 0));
} catch (error) {
    console.error("Error:", error.message);
}

//ex
function positiveNum (a,b){
  if(b<0)
  {
    throw new Error("negative number  is not allowed.")
  }
  return a+b;
}
try {
  console.log(positiveNum(4, 5));
} catch (error) {
  console.error("Error:", error.message);
}
