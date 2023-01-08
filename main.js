/*
1. Write a function which accepts an argument and returns the type. Note :
    There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
2. Write a function that accepts a number as a parameter and check the number is prime or not.
    Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. (3,5,7 duodam penkis ir grazina, kad true - yra prime)
3. Write a function that will accept two strings and will convert first argument to a currency requested in second argument:
    a. First argument will be currency that needs to be converted. for example: '$10'
    b. Second argument will be currency that first argument needs to be converted to. For example: 'dollars', 'euros'
   Constraints: 
    a. Lets assume the first letter in the first argument will always start with currency prefix ($, €)
    b. Function should only convert euros to dollars and vice-versa
    c. Use these conversion rates:
        i. €1 = $1.05
        ii. $1 = €0.95
4. Write a function that accepts an argument that is a function and invokes it. Passed function should log in the console 'Hello'.
5. Write a function that converts Fahrenheit to Celcius. Note: formula for convertion: (x - 32) * 0.5556.
6. Write a function that calculates area of a given rectangle. Note: formula for calculation: x*y.
7. Write a function to find the area and perimeter of a circle.
    Note: formula for perimeter (x stands for radius( apskritimo spindulys ) and π stands for Pi): 2 * π * x. formula for area: π * x * x.
   Constraints:
    a. It should return a string in this format: 'Circle of radius 10 has permiter of 62.83 and area of 314.15'
8. Write a function that takes two arguments and generates a random number in between them.
    For example: getRandomNumber(1, 10) should return me a number that is between 1 and 10.

BONUS:
    Write a function to find factorial of a number.
    Note factorial number formula (if x = 1 or x = 0, then its factorial is 1): x * (x - 1) * (x - 2) * ... 
    Example case result: getFactorial(5) should return 120 because 5 * (5 - 1) * (5 - 2) * (5 - 3) * (5 - 4) = 120
    Some material to get accustemd with factorials:
        a. English version ( https://en.wikipedia.org/wiki/Factorial )
        b. Lithuanian version ( https://lt.wikipedia.org/wiki/Faktorialas )
    Tips: just like in math you will have to use recursive functions to calculate factorial.
    If you need you can read more about it in here https://www.javascripttutorial.net/javascript-recursive-function/

*/

function addSeperator(task) {
  const prefixSuffix = "-----------------";
  console.log(`${prefixSuffix}${task}${prefixSuffix}`);
}

//-------------------------------------------------------------
addSeperator("Task 1");
//1.

function firstFunction(arg) {
  return typeof arg;
}

console.log(firstFunction(""), firstFunction(2), firstFunction(3 < 4));

// UNCLEAR-------------------------------------------------------------
addSeperator("Task 2");
//2.

function secondFunction(prime) {
  if (prime <= 1 || prime % 2 == 0) {
    return false;
  } else {
    prime / secondFunction(prime - 1);
    return true;
  };
}

console.log(secondFunction(7), secondFunction(8));

//-------------------------------------------------------------
addSeperator("Task 3");
//3.

function thirdFunction(dollarsOrEuros, currency) {
  if (dollarsOrEuros === "€") {
    convertedSum = currency * 1.05;
  }
  if (dollarsOrEuros === "$") {
    convertedSum = currency * 0.95;
  }
  return convertedSum;
}

console.log(thirdFunction("$", "2"), thirdFunction("€", "2"));

// UNCLEAR-------------------------------------------------------------
addSeperator("Task 4");
//4.

function sayHello() {
  console.log("Hello");
}

function fourthFunction() {
  sayHello();
}

fourthFunction();

//-------------------------------------------------------------
addSeperator("Task 5");
//5.

function fifthFunction(degreesFahrenheit) {
  degreesCelcius = (degreesFahrenheit - 32) * 0.5556;
  return degreesCelcius;
}

console.log(fifthFunction(500));

//-------------------------------------------------------------
addSeperator("Task 6");
//6.

function sixthFunction(width, hight) {
  rectangleArea = width * hight;
  return rectangleArea;
}

console.log(sixthFunction(4, 5));

//-------------------------------------------------------------
addSeperator("Task 7");
//7.

function seventhFunction(radius) {
  perimeter = 2 * Math.PI * radius;
  area = Math.PI * Math.pow(radius, 2);
  console.log(`Circle of radius ${radius} has permiter of ${Math.floor(perimeter * 100) / 100} and area of ${Math.floor(area * 100) / 100}`);
}

seventhFunction(10);

//-------------------------------------------------------------
addSeperator("Task 8");
//8.

function eighthFunction(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

console.log(eighthFunction(1, 10));


//-------------------------------------------------------------
addSeperator("Task BONUS");
//BONUS.

function bonusFunction(number) {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return (number * bonusFunction(number -1))
  };
};

console.log(bonusFunction(4));