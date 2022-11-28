// console.log - debugging

// kintamieji
// let ir const deklaravimas

// naršyklės funkcijos
// prompt, alert

// duomenų tipai
// string, number, boolean, null, undefined

// tipų tikrinimas typeof

// operatoriai
// ===, +, -, *, /, >, <, **, !==, >=, <=, %

// if () {},  else if () {}, else {}
// function () {}

// funkcija pasiimti elementą
// const element = document.querySelector(".query")

// elemento parametrai
// element.innerText
// element.className

// 1.
// const heading = document.querySelector("#my-element > h1");
// const paragraph = document.querySelector("#my-element > p");

// //heading.className - stringas su klasem
// //heading.innerText stringas su tekstu tarp <el> </el>

// heading.innerText = "Labas vakaras";

// console.log(heading);
// console.log(paragraph);
// console.log(heading.innerText);



// 2.
// const button = document.querySelector("#my-button");
// let i = 0;

// function myFunction() {
//     i++; // i = i + 1;
//     button.innerText = i;
// }



// 3.

// const DROPDOWN_ACTIVE = "dropdown-menu active";
// const DROPDOWN_HIDDEN = "dropdown-menu";
// const dropdownElement = document.querySelector(`#dropdown .${DROPDOWN_HIDDEN}`);

// function toggle() {
//     console.log(dropdownElement.className);
//    if (dropdownElement.className  === DROPDOWN_ACTIVE) {
//     dropdownElement.className = DROPDOWN_HIDDEN;
//    } else {
//     dropdownElement.className = DROPDOWN_ACTIVE;
//    }
// }


// 4.
// const VISIBLE = "accordeon-content active";
// const HIDDEN = "accordeon-content";
// const dropdownElement = document.querySelector (`#accordeon .${HIDDEN}`)

// function toggle() {
//     console.log(dropdownElement.className);
//    if (dropdownElement.className  === VISIBLE) {
//     dropdownElement.className = HIDDEN;
//    } else {
//     dropdownElement.className = VISIBLE;
//    }
// }

//20221123

// 1.
// const bodyElement = document.querySelector("body");

// function changeMode() {
//     if (bodyElement.className === "light") {
//         bodyElement.className = "dark";
//     } else {
//         bodyElement.className = "light";
//     }
// }


// // 1. sąlyga - jeigu šviesus fonas, tada fonas pasikeičia į tamsų
// // šviesus fonas yra class="light"
// // Kad pasikeistų į tamsų body klasė turi pasikeisti į class="dark"

// // 2. sąlyga - jeigu tamsus fonas, pasikeičia į šviesų
// // tamsus fonas yra class="dark"
// // Kad pasikeistų į šviesų body klasė turi pasikeisti į class="light"

// 2.
/**
 * Visa programa veiks tik paspaudus mygtuką.
 * 0. cleanup, pravalome viską iš praeitų atsakymų
 * 1. paspaudžiam mygtuką
 * 2. paleidžiam funkciją, kuri:
 * 3. pasiimam reikšmes iš inputų
 * 4. patikrinam reikšmes iš inputų (>0)
 * 5. JEIGU inputai atitinka SĄLYGĄ
 *  ATITINKA: atlieka skaičiavimus
 *  NEATITINKA: išmeta klaidą
 * 
 * KĄ TURIME NUTRINTI?:
 * skaičiavimus
 * senas reikšmes inputuose
 * klaidos tekstus
 */