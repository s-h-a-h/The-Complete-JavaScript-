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
// let userAge = "21";
// console.log(Number(userAge), userAge);

// let userName = "Shah";
// console.log(Number(userName)); // Not a number NAN

// let userDOB = 22;
// console.log(String(userDOB), userDOB);

// console.log("I'm " + 23 + "year old");
// console.log("23" + "24"); //2324
// console.log("23" - "24"); // -1
// console.log("Shah" + "Raza"); // ShahRaza
// console.log("Shah" - "Raza"); // NAN


// let n = "1" + 1; //"11"
// let m = n - 1; // 10
// console.log(m);


//-------------------------------------------------------------------
// Truthy and falsy value

// console.log(Boolean(0)); // false
// console.log(Boolean("Shah")); //true
// console.log(Boolean({})); //true
// console.log(Boolean("")); //false

// let money = 0;

// if (money) {
//     console.log(" Hello ");
// }
// else {
//     console.log(" hi ");
// }

// let height = 0; // Beacuse of falsy value

// if (height) {
//     console.log("Height is defined");
// }
// else {
//     console.log("Height is not defined");
// }


//-------------------------------------------------------------------
// == & ===

// let age = "18";

// console.log(age == 18, age === 18); // true , false


//-------------------------------------------------------------------
//Logical operator
// const hasDrivingLicense = false;
// const hasGoodVision = true;
// const isTired = true;

// if (hasDrivingLicense || hasGoodVision) {
//     console.log(`You can drive`);
// }

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//     console.log(`You can drive`);
// }
// else {
//     console.log(`You can't drive`);
// }


//-------------------------------------------------------------------
//Switch statement
// const day = "monday";

// switch (day) {
//     case "monday":
//         console.log("Today is monday");
//         break;
//     case "tuesday":
//         console.log("Today is tuesday");
//         break;
//     case "wednesday":
//         console.log("Today is wednesday");
//         break;
//     case "thursday":
//         console.log("Today is thursday");
//         break;
//     case "friday":
//         console.log("Today is friday");
//         break;
//     case "saturday":
//         console.log("Today is saturday");
//         break;
//     case "sunday":
//         console.log("Today is sunday");
//         break;
//     default:
//         console.log("Please enter a valid day");
// }


//-------------------------------------------------------------------
// Expression and statements
// Expression => which produces value
// Statement => Doesnot produce value

// Example of expression are 23 + 23 , true && false , 24
// Example of statement  if {} else {}


//-------------------------------------------------------------------
// The conditional (ternary) operator

const age = 23;

age >= 18 ? console.log(`I want to drink wine "🍷"`) : console.log(`I want to drink water "💧"`)

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(`I want to drink ${drink}`);


console.log(` I link to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
