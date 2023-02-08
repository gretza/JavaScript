const favoriteNumber1 = 1;
const favoriteNumber2 = 4;
const favoriteNumber3 = 76;

const favoriteNumbers = [1, 4, 76];

favoriteNumbers.push(3); // įdeda į galą
favoriteNumbers.unshift(0); //įdeda į pradžią
// favoriteNumbers.pop(3) // išima iš galo
// favoriteNumbers.shift(3) //išima iš pradžios

// console.log(favoriteNumbers[favoriteNumbers.length -1]); // paskutinis narys
// console.log(favoriteNumbers.at(-1)); // paskutinis narys
favoriteNumbers.reverse(); // apsivercia seka

const arraysSample = [
  "some text",
  1,
  { text: "abc" },
  () => {},
  true,
  undefined,
  null,
];

/*
1. Write a loop/cycle that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

2. Write a function that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the nubmer,
    and for numbers divisible by 5 (and not 3), print "Buzz" instead.
        
    2.1 Once you have that working, modify your function to print "FizzBuzz" for members that are divisible by both 3 and 5 
    ( and still print "Fizz" or "Buzz" for numbers divisible by only one of those)

3. Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
    for example: range(1, 3) // [1, 2, 3]

4. Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
  For this exercise, write two functions, reverseArray and reverseArrayInPlace.
  The first, reverseArray, takes an array as argument and produces a new array that has the same elemens in the inverse order.
  The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
  Neither may use the standard reverse method.

BONUS:
Write a function that creates a string that represents 8x8 grid, using new line characters to separate lines. At each position of the grid there is either 
a space or a # character. The characters should form a chessboard. Passing this string to console.log should show something like this:
  # # # #
 # # # # 
  # # # #
 # # # # 
  # # # #
 # # # # 
  # # # #
 # # # # 
 When you have function that generates this pattern, define a binding size = 8 and change the function so that it works for any size, outputting a grid 
 of the given width and height.
*/

function addSeperator(task) {
    const prefixSuffix = "-----------------";
    console.log(`${prefixSuffix}${task}${prefixSuffix}`);
}

addSeperator('Task 1');

// 1.
const makeTriagle = () => {
  for (let i = "#"; i !== "########"; i += "#") {
    console.log(`${i}`);
  }
};

makeTriagle();

const logTriangle = () => {
  for (let char = "#"; char.length <= 7; char += "#") {
  console.log(char);
  };
};

logTriangle();

addSeperator('Task 2');

// 2. (perdaryti i ternary, jei liks laiko)
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(`${i}`);
    }
  }
};

fizzBuzz();
addSeperator('Task 3');

// 3.
const range = (min, max) => {
  const rangeOfNumbers = [];
  for (let i = min; i <= max; i++) {
    rangeOfNumbers.push(i);
  };
  return rangeOfNumbers;
};

console.log(range(1, 10));
addSeperator('Task 4');

// 4.
const array = [1,3,5,12,14];

const reverseArray = (array) => {
    const newArray = [];
    for (const i of array) {
        newArray.unshift(i);
    };
    console.log(newArray);
};

reverseArray(array);


const reverseArrayT = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
  result.unshift(array[i])
  };
  return result;
};

console.log(reverseArrayT(array));


const reverseArrayInPlace = (array) => {
  let currentIteratedValue;

  for (let i = 0; i < array.length / 2; i++) {
    currentIteratedValue = array[i];
    const switchWith = array.[array.length - 1 - i];
    array[i] = switchWith
    array[array.length - 1 - i] = currentIteratedValue
  }
};

const arrayToBeModified = [5, 3, 99];
console.log(reverseArrayInPlace(arrayToBeModified));

