// let svoris = prompt("Koks jūsų svoris? (kg)");
// let svorisKg = Number(svoris);

// let ugis = prompt("Koks jūsų ūgis? (centimetrais)");
// let ugisCm = Number(ugis);

// let ugisCmKv = ugisCm**2;

// const daugiklis = 10_000;

// let bmi = svorisKg / ugisCmKv * daugiklis;

// console.log(bmi);

// alert(`Jūsų BMI yra ${bmi}`)


// 2.
// console.log(Number("123")); 123
// con

// console.log(Boolean("")); //false
// console.log(Boolean(0)); //false

// console.log(Boolean("a")); //true
// console.log(Boolean(1)); //true
// console.log(Boolean(-1)); //true

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// 3.
// console.log(1/2); //0.5
// console.log(2*2.5); //5
// console.log(4**2.5); //16
// console.log(4**(1/2)); //2

// 4.
// console.log(7/2); //3.5
// console.log(7%2); //1 (liekana)

// 5.
// let pirmasZodis = "Vardenis";
// let antrasZodis = "Pavardenis";
// let pilnaFraze = `${pirmasZodis} ${antrasZodis}`; //String template
// let kitaFraze = pirmasZodis + " " + antrasZodis; //"Vardenis Pavardenis"

// 6.
// console.log("1" + 2); // 12, nes 2 pavercia i stringa
// console.log(2 + "1"); // 21
// console.log("1" + 2 + 2); // 122
// console.log(2 + 2 + "1"); // 41

// 7.
// const pradzia = 18;
// const valandos = Number(prompt("Kiek dabar valandų?")); // 4
// const minutes = Number(prompt("Kiek dabar minučių?")); // 0


// let minuciuTikrinimas = minutes > 0; //boolean true
// let valandosKeitimas = Number(minuciuTikrinimas); //1
// let skirtumasValandu = valandos - valandosKeitimas;
// let likutisValandu = pradzia - skirtumasValandu;

// let likutisMinuciu = (60 - minutes) * valandosKeitimas;

// /*
// Jeigu valandos keitimas yra vienetas, mes rodome minuciu likuti,
// jeigu valandos keitimas yra 0, mes rodome 0 minuciu likuti
// */

// alert(`Iki paskaitos liko ${likutisValandu} valandų ir ${likutisMinuciu} min.`)


8.
console.log("A", "" + 1 + 0); //A 10
console.log("B", "" - 1 + 0); //B -1
console.log("C", true + false); //C 1
console.log("D", 6 / "3"); //D 2
console.log("E", "2" * "3"); //E 6
console.log("F", 4 + 5 + "px"); //F 9px
console.log("G", "$" + 4 + 5); //G $45
console.log("H", "4" - 2); //H 2
console.log("I", "4px" - 2); //I 4px-2 ---> NaN
console.log("J", "  -9  " + 5); //J -9+5 --> -9 5
console.log("K", "  -9  " - 5); //K -14
console.log("L", null + 1); //L, 1
console.log("M", undefined + 1); //M, 1 --> NaN