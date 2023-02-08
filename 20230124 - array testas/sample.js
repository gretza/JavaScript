// array
const favoriteColors = ["black"];

//--------------MODIFIKACIJOS---------

// Ideda i array gala
favoriteColors.push("green");
favoriteColors.push("brown");

// Ideda i array prieki
favoriteColors.unshift("white");
favoriteColors.push("red");

// Isima paskutini itema is array
favoriteColors.pop();

// Isima pirma itema is array
favoriteColors.shift();

// Pirma array itema pakeisti
favoriteColors[0] = "red";

//--------------CIKLAI----------------

let maxIteration = 5;

// for (
//   let i = 0;
//   i < maxIteration;
//   i++ /*sitas gali buti ir viduje, o cia kita salyga*/
// ) {
//   Math.random();
// }

// while (true) {
//   console.log(Math.random());
// }

// do {
//   console.log(Math.random());
//   currentIteration++;
// } while (currentIteration < 0); // suveikia bent karta, nes pirma suveikia ir tik tada tikrina salyga


// for (let color of favoriteColors) {
//     console.log(color);
// };
// greitesnis variantas yra forEach()

let userFavoriteColour = '';

const forEachFunction = (color, index) => {
    userFavoriteColour += `${index === 0 ? '': ', '}${color}`;
};

favoriteColors.forEach(forEachFunction);

const favoriteColoursWithoutRed = favoriteColors.filter((color) => {
    return color !== 'red';
});

console.log(favoriteColoursWithoutRed);

