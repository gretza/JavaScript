// Užduotis - Sukurti BMR kalkuliatorių
// For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
// For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)

// To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
// Sedentary (little or no exercise): calories = BMR × 1.2;
// Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
// Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
// Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and
// If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.

// suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// atsakomas koks mūsų aktyvumo lygis
// atsakomas kiek kalorijų mums reikia per dieną

function calculateBMR() {
  const heightEl = document.querySelector("#height");
  const weightEl = document.querySelector("#weight");
  const ageEl = document.querySelector("#age");
  const height = Number(heightEl.value);
  const weight = Number(weightEl.value);
  const age = Number(ageEl.value);
  const genderEl = document.querySelector('input[name="gender"]:checked');
  let gender;
  const genderError = document.querySelector("#gender-error");
  const activityError = document.querySelector("#activity-error");
  const ageError = document.querySelector("#age-error");

  if (genderEl) {
    gender = genderEl.value;
  }

  const activityEl = document.querySelector('input[name="activity"]:checked');
  let activity;

  if (activityEl) {
    activity = activityEl.value;
  }

  const isHeightValid = height > 0;
  const isWeightValid = weight > 0;
  const isAgeValid = age > 0;
  const isGenderValid = gender === "man" || gender === "woman";

  const isActivityValid =
    activity === "sedentary" ||
    activity === "light" ||
    activity === "moderately" ||
    activity === "very" ||
    activity === "extra";

  let activityMultilpier;
  if (activityEl.value === "sedentary") {
    activityMultilpier = 1.2;
  } else if (activityEl.value === "light") {
    activityMultilpier = 1.375;
  } else if (activityEl.value === "moderately") {
    activityMultilpier = 1.55;
  } else if (activityEl.value === "very") {
    activityMultilpier = 1.725;
  } else {
    activityMultilpier = 1.9;
  }

  
}

