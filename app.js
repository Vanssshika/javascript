const First_Name="";
let myName=GET_MY_FIRST_NAME();
function GET_MY_FIRST_NAME(){
    const First_Name="vanshika";
 //return First_Name;

}
//console.log(myName);
//console.log(First_Name);
//mutable and immutable 
//why javascript code run without line by line even it is interpreted language 
function getMyFullName (firstName='',lastName=''){
   
    return firstName +" "+ lastName;

}
let myMistakeFullName=getMyFullName("vanshika")
function addition(intA,intB){
return intA + intB; 

}
function substraction(intA,intB){
    return intA - intB;
}
let resultA = getMyFullName ("vanshika","jain");
let resultB= addition(6,2);
let resultC= substraction(6,3);
//console.log(resultA);
//console.log(resultB);
//console.log(resultC);
console.log(myMistakeFullName);
//challenge1-  in this pattern we can't ingore optional parameter
//challenge2- i can't pass dynamic or as much as need parameter

//high order function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(3, 4, add)); // 7
console.log(applyOperation(3, 4, multiply)); // 12            
    


//Destructuring Parameters
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
const users = {
    firstName: 'ravi',
    lastName: 'sharma',
    age: 30
};

console.log(getFullName(user));
 console.log(getFullName(users));

 function square(x) {
    return x * x;
}

console.log(square(5)); // 16
console.log(square(4)); // 16 

// Function Declaration
function addd(a, b) {
    return a + b;
}

console.log(addd(2, 3)); // 5
//rest parameter with arrow function          
let sum = (...args) => {
    return args.reduce((acc, val) => acc + val, 0);
};

console.log(sum(1, 2, 3, 4, 5));

//multiline statement
let calculateArea = (length, width)=>
 {
    let area = length * width; 
    return  area;
};

console.log(calculateArea(5, 3));
  

//expection handling
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

try {
    console.log(divide(4, 0)); 
    console.log(divide(4, 0)); 
} catch (error) {
    console.error(error.message); // Division by zero is not allowed.
}  
finally{
    console.log(" program terminated");
}         
    