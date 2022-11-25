//-------------------------------------------------------------------
// Values and variables
// let firstName = "Shah"; // firstName => Variable, "Shah" => value
// console.log(firstName);

//-------------------------------------------------------------------
// Data types
// let firstName = "Shah";
// let age = 22;
// let isEmployed = true;
// let department;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof isEmployed);
// console.log(typeof department);

// let, const
// let day = "Monday";
// console.log(day);

// day = "Tuesday";
// console.log(day);

// const birthDate = 22;
// console.log(birthDate);
// birthDate = 25; // error => cannot reassign to const variable

//-------------------------------------------------------------------
//Operator
// const now = 2000;
// const numb1 = now + 25;
// const numb2 = now - 25;
// const numb3 = now * 25;
// const numb4 = now / 25;
// console.log(numb1, numb2, numb3, numb4, 2 ** 3); // ** means 2 power 3


// const firstName = "Shah";
// const lastName = "Raza";

// console.log(firstName + " " + lastName); // string concat
// Assignment operator
// let x = 10;
// x = 10 + 5;
// x += 15;  //x = x + 15;
// x++; // x = x + 1;
// x--; // x = x - 1;

//Comparision operator
// let a = 10;
// let b = 20;

// console.log(a > b); //false
// console.log(a >= 10); // true


//-------------------------------------------------------------------
// String and template literal
// const firstName = "Shah";
// const job = "Software developer";
// const hometown = "New Delhi";

// const details = "Hi! My name is " + firstName + ". I'm a " + job + " from " + hometown + ".";
// console.log(details);

// const newDetails = `Hi! My name is ${firstName} . I'm a ${job} from ${hometown}`; // template literal
// console.log(newDetails);

// console.log(`Multiple
// Lines`);


//-------------------------------------------------------------------
//If else

// const alexAge = 15;
// const rahulAge = 25;
// const aliAge = 18;
// const legalAge = 18;

// if (aliAge >= legalAge) {
//     console.log(`Congrats! You are eligable`);
// }
// else {
//     console.log(`Try next year`);
// }


//-------------------------------------------------------------------
// Type conversion and type coercion
// String to Number
let userAge = "21";
console.log(Number(userAge), userAge);

let userName = "Shah";
console.log(Number(userName)); // Not a number NAN

let userDOB = 22;
console.log(String(userDOB), userDOB);

console.log("I'm " + 23 + "year old");
console.log("23" + "24"); //2324
console.log("23" - "24"); // -1 
console.log("Shah" + "Raza"); // ShahRaza
console.log("Shah" - "Raza"); // NAN


let n = "1" + 1; //"11"
let m = n - 1; // 10
console.log(m);



