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
const VISIBLE = "accordeon-content active";
const HIDDEN = "accordeon-content";
const dropdownElement = document.querySelector (`#accordeon .${HIDDEN}`)

function toggle() {
    console.log(dropdownElement.className);
   if (dropdownElement.className  === VISIBLE) {
    dropdownElement.className = HIDDEN;
   } else {
    dropdownElement.className = VISIBLE;
   }
}