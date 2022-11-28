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


// const heightInput = document.querySelector("#height");
// const weightInput = document.querySelector("#weight");
// const heightError = document.querySelector("#height-error");
// const weightError = document.querySelector("#weight-error");
// const result = document.querySelector("#result");


// console.log(heightInput, weightInput, heightError, weightError, result)

// function calculateBMI() {
//     heightError.innerText = "";
//     weightError.innerText = "";
//     result.innerText = "";

    // const heightCm = Number (heightInput.value);
    // const weightKg = Number (weightInput.value);

    // const isHeightValid = heightCm > 0;
    // const isWeightValid = weightKg > 0;

//     if (isHeightValid) {
//         if (isWeightValid) {
//             const BMI = (weightKg / heightCm / heightCm) * 10_000;
//             result.innerText = BMI;
//             heightInput.value = "";
//             weightInput.value = "";
//         } else {
//             showHeightError;
//         }
//     } else {
//         heightError.innerText = "Error";
//         if(!isWeightValid) {
//             showWeightError;
//         }
//     }
// }

// function cleanupResults () {
//     heightError.innerText = "";
//     weightError.innerText = "";
//     result.innerText = "";
// }

// function showHeightError () {
//     heightError.innerText = "Error";
// }

// function showWeightError () {
//     weightError.innerText = "Error";
// }

//20221128

const height = 180;
const weight = 90;
// kadangi mes kai kurias reikšmes gauname iš inputų, jos gali būti neteisingos, dėl to turime jas patikrinti.
// BOOLEAN
const isHeightValid = Number(height) > 0; // tikra verte // true jei geras skaičius ir false jei 0 arba NaN
const isWeightValid = Number(weight) > 0; // tikra verte // true jei geras skaičius ir false jei 0 arba NaN
if (isHeightValid) {
 if (isWeightValid) {
 // A.
 // mūsų success path
 } else {
 // B.
 // svoris nevalidus
 }
} else {
 // C.
 // aukštis nevalidus
 if (!isWeightValid) {
 // B.
 // svoris nevalidus
 }
}

// Kad naudotis AND (&&) operatorium, abidvi sąlygos turi būti įgyvendintos.
if (isHeightValid && isWeightValid) {
 // A.
 // Success path
 console.log(true && true);
} else {
 if (!isHeightValid) {
 // Neteisingas Svoris
 // B.
 // Klaida prie svorio inputo
 }
 // dėl ko čia nėra else?
 if (!isWeightValid) {
 // Neteisingas aukštis
 // C.
 // Klaida prie aukščio inputo
 }
}


// // Jei bent viena sąlyga yra įgyvendinta, jis veiks.
if (!isHeightValid || !isWeightValid) {
 if (!isHeightValid) {
 // Neteisingas Svoris
 // B.
 // Klaida prie svorio inputo
 }
 // dėl ko čia nėra else?
 if (!isWeightValid) {
 // Neteisingas aukštis
 // C.
 // Klaida prie aukščio inputo
 }
} else {
 // A.
 // Success path
 console.log(true && true);
}
// _ !isHeightValid || !isWeightValid yra priešingas isHeightValid && isWeightValid
console.log(
 !(isHeightValid && isWeightValid) === !isHeightValid || !isWeightValid
);
// 2 operatoriai:
// and - && IR
// or - || ARBA