
function addSeperator(task) {
  const prefixSuffix = "-----------------";
  console.log(`${prefixSuffix}${task}${prefixSuffix}`);
}

//-------------------------------------------------------------
addSeperator("Task 1");
/*
1. Write a function which accepts an argument and returns the type. Note :
  There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

function firstFunction(argument) {
  return typeof argument;
}

console.log(firstFunction(""), firstFunction(2), firstFunction(3 < 4));

//-------------------------------------------------------------
addSeperator("Task 2");
/*
2. Write a function that accepts a number as a parameter and check the number is prime or not.
    Note : A prime number (or a prime) is a natural number greater than 1 that has no positive 
    divisors other than 1 and itself. (3,5,7 duodam penkis ir grazina, kad true - yra prime)
*/

function secondFunction(prime) {
  if (prime <= 1 || prime % 2 == 0) {
    return false;
  } else {
    prime / secondFunction(prime - 1);
    return true;
  };
}

console.log(secondFunction(7), secondFunction(15));


//TEISINGAS SPRENDIMAS -------------------------------------------------------------
const checkIsPrime = (number) => {

  const testNumber = (x) => {
    if (x === 1) {
      return false;
    };
  
    if (x === 2) {
      return true;
    }
  
    if (number % (x - 1)  === 0) {
      return false;
    }
  
    return testNumber(x - 1);
  }

  return testNumber(number);
};

//-------------------------------------------------------------
addSeperator("Task 3");
/*
3. Write a function that will accept two strings and will convert first argument to a currency requested in second argument:
    a. First argument will be currency that needs to be converted. for example: '$10'
    b. Second argument will be currency that first argument needs to be converted to. For example: 'dollars', 'euros'
   Constraints: 
    a. Lets assume the first letter in the first argument will always start with currency prefix ($, €)
    b. Function should only convert euros to dollars and vice-versa
    c. Use these conversion rates:
        i. €1 = $1.05
        ii. $1 = €0.95
*/

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

//TEISINGAS SPRENDIMAS -------------------------------------------------------------

const currencySymbolMap = {
  $: "dollars",
  "€": "euros",
}

const convertCurrency = (valueToConvert, convertTo) => {
  const currencySymbol = valueToConvert.at(0)
  const convertedSymbolToCurrency = currencySymbolMap[currencySymbol];
  const currencyValue = valueToConvert.substring(1);

  if (convertedSymbolToCurrency === convertTo) {
    return valueToConvert;
  }

  return convertTo === "dollars" ? : `$${currencyValue * 1.05}` : `€${currencyValue * 0.95}`;

  // is the same as ternary operator in line 104
  // if (convertTo === "dollars") {
  //   return `$${currencyValue * 1.05}`;
  // }

  // if (convertTo === "euros") {
  //   return `€${currencyValue * 0.95}`;
  // }

};

convertCurrency('$10', 'euros');

// -------------------------------------------------------------
addSeperator("Task 4");
/*
4. Write a function that accepts an argument that is a function and invokes it. Passed function should log in the console 'Hello'.
*/

function hello () {
  console.log("Hello");
}

function fourthFunction(hello) {
  hello();
}

fourthFunction(hello);

//TEISINGAS SPRENDIMAS -------------------------------------------------------------

const startEngine = (onSuccess, onFail) => {
  const engineStarted = true;

  engineStarted ? onSuccess() : onFail(); //tas pats, kas 142-146

  // if(engineStarted) {
  //   onSuccess();
  // } else {
  //   onFail()
  // }
};

const onSuccess = () => {
  console.log('Engine started.')
}

const onFail = () => {
  console.log('Engine failed to start.')
}

startEngine(onSuccess, onFail)

//-------------------------------------------------------------
addSeperator("Task 5");
/*
5. Write a function that converts Fahrenheit to Celcius. Note: formula for convertion: (x - 32) * 0.5556.
*/

function fifthFunction(degreesFahrenheit) {
  degreesCelcius = (degreesFahrenheit - 32) * 0.5556;
  return degreesCelcius;
}

console.log(fifthFunction(500));

//TEISINGAS SPRENDIMAS -------------------------------------------------------------

const convertFahrenheitToCelcius = (fahrenheit) => {
  return celcius = (fahrenheit - 32) * 0.5556;
};

console.log(convertFahrenheitToCelcius(50));

//-------------------------------------------------------------
addSeperator("Task 6");
/*
6. Write a function that calculates area of a given rectangle. Note: formula for calculation: x*y.
*/

function sixthFunction(width, hight) {
 return width * hight;
}

console.log(sixthFunction(4, 5));

//-------------------------------------------------------------
addSeperator("Task 7");
/*
7. Write a function to find the area and perimeter of a circle.
    Note: formula for perimeter (x stands for radius( apskritimo spindulys ) and π stands for Pi): 2 * π * x. formula for area: π * x * x.
   Constraints:
    a. It should return a string in this format: 'Circle of radius 10 has permiter of 62.83 and area of 314.15'
*/

function seventhFunction(radius) {
  perimeter = 2 * Math.PI * radius;
  area = Math.PI * Math.pow(radius, 2);
  console.log(`Circle of radius ${radius} has permiter of ${Math.floor(perimeter * 100) / 100} and area of ${Math.floor(area * 100) / 100}`);
}

seventhFunction(10);

//TEISINGAS SPRENDIMAS -------------------------------------------------------------

const gerCircleAreaAndPerimeter = (radius) => {
  const perimeter = 2 * Math.PI * radius;
  const are = Math.PI * Math.pow(radius, 2);
  return `Circle of radius ${radius} has permiter of ${Math.floor(perimeter * 100) / 100} and area of ${Math.floor(area * 100) / 100}`
}

//-------------------------------------------------------------
addSeperator("Task 8");
/*
8. Write a function that takes two arguments and generates a random number in between them.
    For example: getRandomNumber(1, 10) should return me a number that is between 1 and 10.
*/

function eighthFunction(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

console.log(eighthFunction(1, 10));


//-------------------------------------------------------------
addSeperator("Task BONUS");
/*
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

function bonusFunction(number) {
  if (number < 0) {
    return false;
  } else if (number == 0) {
    return 1;
  } else {
    return (number * bonusFunction(number -1))
  };
};

console.log(bonusFunction(4));

//TEISINGAS SPRENDIMAS -------------------------------------------------------------

const getFactorial = (number) => {
  if (number <= 1) {
    return 1;
  }

  return number * getFactorial(number - 1);
}