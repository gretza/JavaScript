// let i = 0;

// i += 3; // i = 1 + 3;

// console.log("pirmas", i);

// i++; // i += 1; i = i + 1;

// console.log("antras", i);

// ++i; // i++, bet yra vienas skirtumas

// console.log("trecias", i);

//------------------------------------------------------------------

// let y = 0;

// y = y + 1 //y++ //1

// console.log(y++); // 1 | 1. console.log; 2. y += 1; // 2
// console.log(y); // 2
// console.log(++y); // 3 | 1. y += 1;      2. console.log; // 3

//-----------------------------------------------------------------

/*
    1. >
    2. <
    3. >=
    4. <=
    5. == | reikšmės turi sutapti, nes tipus suvienodina
    6. === | reikšmės ir tipai sutapti turi
    7. !=
    8. !==
*/

// console.log(1 == "1"); // true
// console.log(1 === "1"); // false

// console.log("A" > "Z"); //false | pagal abecele tikrina
// console.log("Z" > "A"); //true

// const x = "asd";
// const y = "xz";
// console.log(x.length > y.length); // true

// 5 > 4; // true
// "apple" > "pineapple"; // false
// "2" > "12"; // true
// undefined == null; // true | abu reiksmes neturi, todel tinka
// undefined === null // false
// null == "\n0\n"; // false
// null === +"\n0\n"; // false

//--------------------------------------------------------------

// const metai = prompt("Kurie dabar metai?");

// let x;

// if (metai === "2022") { // šita sąlygą viską vers į Boalean jos viduje
//     alert("Tu teisus!");
//     x = 0;
// }   else {
//     alert("Tu neteisus!");
//     x = 1;
// }

// console.log(x); //1 arba 0

//kai randama, kad kažkuri sąlyga atitinka - toliau neskaitoma tas blokas ir ištrinama nereikalinga info, todel kintamuosiu reikia deklaruoti issoreje

//-------------------------------------------------------------

// const metai = prompt("Kurie dabar metai?");
// if (Number(metai) < 2000) {
//     alert("Visiškai nepataikei"); // +
// } else if (metai === "2022") { // šita sąlygą viską vers į Boalean jos viduje
//     alert("Tu teisus!");
// }   else {
//     alert("Tu neteisus!");
// }

//--------------------------------------------------------------

// Užduotis su medžiu

// const colour = prompt("Kokia spalva? (red, yellow, blue)");
// const model = prompt("Koks modelis? (įrašykite metus)");
// const make = prompt("Kokia marke?(ferrari, etc.)");
// const mileage = prompt("Kokia rida? (kiek km nuvažiuota)");

// if (colour === "red") {
//   if (Number(model) > 2010) {
//     alert("Buy!");
//   } else if (Number(mileage) < 50000) {
//     alert("Buy!");
//   } else {
//     alert("Don't buy!");
//   }
// } else {
//   if (colour === "yellow") {
//     if (make === "ferrari") {
//       alert("Buy!");
//     } else {
//       alert("Don't buy!");
//     }
//   } else {
//     alert("Don't buy!");
//   }
// }

//----------------------------------------------------

// Uzduotis BMI

// const svoris = Number(prompt("Koks jūsų svoris? (kg)"));
// const ugisKv = Number(prompt("Koks jūsų ūgis? (centimetrais)"))**2;
// const daugiklis = 10_000;
// const KMI = svoris / ugisKv * daugiklis

// if (KMI < 18.5) {
//     alert("Under weight")
// } else if (KMI < 25) {
//     alert("Normal")
// } else if (KMI < 30) {
//     alert("Over weight")
// } else if (KMI < 35) {
//     alert("Obesity(Class I)")
// } else if (KMI < 40) {
//     alert("Obesity(Class II)")
// } else {
//     alert("Extreme Obesity")
// }

// // Uzduotis BMR

// For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
// For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)

// To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
// Sedentary (little or no exercise): calories = BMR × 1.2;
// Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
// Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
// Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and
// If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.
// // suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// // atsakomas koks mūsų aktyvumo lygis
// // atsakomas kiek kalorijų mums reikia per dieną

// const gender = prompt("Esate vyras ar moteris?");
// const weight = Number(prompt("Koks jūsų svoris? (kg)"));
// const height = Number(prompt("Koks jūsų ūgis? (cm)"));
// const age = Number(prompt("Koks jūsų amžius?"));
// const activityLevel = Number(prompt("Koks jūsų aktyvumo lygis? (0,1,2,3 arba 4)"));
// let BMR;

// if (gender = "vyras") {
//     BMR = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
// } else {
//     BMR = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
// }

// if (activityLevel === 0) {
//     alert(BMR * 1.2)
// } else if (activityLevel === 1) {
//     alert(BMR * 1.375)
// } else if (activityLevel === 2) {
//     alert(BMR * 1.55)
// } else if (activityLevel === 3) {
//     alert(BMR * 1.725)
// } else {
//     alert(BMR * 1.9)
// }

// Uzduotis: Project development

// let year = prompt("In which year was the ECMAScript-2015 specification published?");
//   if (year == 2015) {
//     alert("You guessed it right!");
//   } else {
//     alert("How can you be so wrong?"); // any value except 2015
//   }

let budget = prompt("Definite budget? (yes/no)");
let champion = prompt("Known champion for it? (yes/no)");
let scope = prompt("Clear project scope? (yes/no)");
let timescale = prompt("Archievable Timescale? (yes/no)");
let profit = prompt("Happy to profit? (yes/no)");
let funding = prompt("Alternative funding? (yes/no)");

if (budget === "yes") {
  if (champion === "yes") {
    if (scope === "yes") {
      if (timescale === "yes") {
        alert("Go for it.");
      } else {
        alert("Get more time.");
      }
    } else {
      if (profit === "yes") {
        alert("Cash in.");
      } else {
        alert("Explain why it matters");
      }
    }
  } else {
    alert("Leave it alone.");
  }
} else {
  if (funding === "yes") {
    alert("Sort out funding.");
  } else {
    alert("Leave it alone.");
  }
}
