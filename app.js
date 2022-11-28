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


const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const heightError = document.querySelector("#height-error");
const weightError = document.querySelector("#weight-error");
const result = document.querySelector("#result");


console.log(heightInput, weightInput, heightError, weightError, result)

function calculateBMI() {
    heightError.innerText = "";
    weightError.innerText = "";
    result.innerText = "";

    const heightCm = Number (heightInput.value);
    const weightKg = Number (weightInput.value);

    const isHeightValid = heightCm > 0;
    const isWeightValid = weightKg > 0;

    if (isHeightValid) {
        if (isWeightValid) {
            const BMI = (weightKg / heightCm / heightCm) * 10_000;
            result.innerText = BMI;
            heightInput.value = "";
            weightInput.value = "";
        } else {
            showHeightError;
        }
    } else {
        heightError.innerText = "Error";
        if(!isWeightValid) {
            showWeightError;
        }
    }
}

function cleanupResults () {
    heightError.innerText = "";
    weightError.innerText = "";
    result.innerText = "";
}

function showHeightError () {
    heightError.innerText = "Error";
}

function showWeightError () {
    weightError.innerText = "Error";
}