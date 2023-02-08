/*
Tasks:
1. Write a function that will count vowels (balsė) in a given word. Vowels: a, e, i, o, u.
2. Write a function that will return you boolean value based on if given word is palindrome or not. A word is considered to be palindrome only if it retains same if reversed, for example racecar, bannana.
3. Write a function to find letter occurences in a word. For example: letterCount('Connect', 'c') -> 2, because letter c occures two times.
4. Write a function to compute a union of two arrays, and removes all duplicates. For example: union([1, 2, 3], [1, 10, 2, 100]) -> [1, 2, 3, 10, 100]
5. Write a function to find a pair of elements from an given array whose sum equals a specific target number. Return an array with those two elements indexes.
For example: findNumberPairs([10, 20, 10, 40, 50, 60, 70], 50) -> [2, 3]
6. Write a function to filter false, null, undefined, 0 and empty string values from an array. It should return a new array.

For next two tasks we will be working with this data: const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
7. Write a function to find index of the 'Eagles' item, and use that to remove the 'Eagles' item. Return the end result which should be [ "Parrots", "Falcons", "Emus", "Caracaras", "Egrets" ]
8. Make a new array from the above array, called eBirds, that contains only birds from the original array whose names begin with the letter "E".
*/

function addSeperator(task) {
  const prefixSuffix = "-----------------";
  console.log(`${prefixSuffix}${task}${prefixSuffix}`);
}

//-------------------------------------------------------------
addSeperator("Task 1");

const countVowels = (word) => {
  let vowelCounts = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word.at(i) === "a" ||
      word.at(i) === "e" ||
      word.at(i) === "i" ||
      word.at(i) === "o" ||
      word.at(i) === "u"
    ) {
      vowelCounts++;
    }
  }
  return vowelCounts;
};

console.log(countVowels("hello"));

//-------------------------------------------------------------
addSeperator("Task 2");

const palindromeOrNot = (word) => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindromeOrNot("racecar"));
console.log(palindromeOrNot("hello"));

//-------------------------------------------------------------
addSeperator("Task 3");

const letterCount = (word, letter) => {
  const letters = word.split("");
  const result = letters.filter((char) => {
    return char === letter;
  }).length;
  return result;
};

console.log(letterCount("Cconnect", "c"));

//-------------------------------------------------------------
addSeperator("Task 4");

const computeUnion = (array1, array2) => {
  const newArray = array1.concat(array2);
  let finalArray = [];
  newArray.forEach((number) => {
    if (!finalArray.includes(number)) {
      finalArray.push(number);
    }
  });
  return finalArray;
};

console.log(computeUnion([1, 2, 3], [1, 10, 2, 100]));

//-------------------------------------------------------------
addSeperator("Task 5");

const findNumberPairs = (array, sum) => {
  let result = [];
  for (let i = 0; 1 < array.length; i++) {
    for (let index = i + 1; index < array.length; index++) {
      if (array[i] + array[index] === sum) {
        result.push(i, index);
        return result;
      }
    }
  }
  console.log("No pairs in this array.");
};

console.log(findNumberPairs([10, 20, 10, 40, 50, 60, 70], 50));

// const findNumberPairs = (array, sum) => {
//   for (let i = 0; 1 < array.length; i++) {
//     for (let index = i + 1; index < array.length; index++) {
//       if (array[i] + array[index] == sum) {
//         console.log(i, index);
//         break;
//       }
//     }
//   }
//   console.log("No pairs in this array.");
// };
// findNumberPairs([10, 20, 10, 40, 50, 60, 70], 50);

//-------------------------------------------------------------
addSeperator("Task 6");
// 6. Write a function to filter false, null, undefined, 0 and empty string values from an array. It should return a new array.

const array = [];
