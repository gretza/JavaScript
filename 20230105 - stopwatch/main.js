// const obj = {
//   a: "text",
//   b: "text2",
//   c: { x },
// };

// const {
//   a,
//   b,
//   c: { x },
// } = obj;
// //const a = obj.a;
// //const b = obj.b;
// //const x = obj.c.x;

// const { a: text } = obj;
// //const text = obj.a

// const { c } = obj;
// //const c = obj.c;

//-------------UZDUOTIS---------------
// user objektą, kuris turi name ir email
// jis paduodamas į funkciją
// funkcijoje jis destruktūrizuojamas ir pasiimamas tik email.
// išlogginti email

// const user = {
//   name: 'Vardenis',
//   email: 'vardenis.pavardenis@email.com',
// };

// function logEmail(user) {
//     const { email } = user;
//     console.log(email);
// }

// logEmail(user);

//----------------REST operatorius------------------------

// const obj = {
//     a: 'text',
//     b: 'text 2',
//     c: 'text 3',
// };

// const { a, ...restObj } = obj;

// console.log('a', a);
// console.log('obj', obj);
// console.log('restObj', restObj);

//----------------------

// Iššimti emaila ir grąžinti likusią info
// const user = {
//   name: 'Vardenis',
//   email: 'vardenis.pavardenis@email.com',
//   password: 'password',
// };

// function logEmailAndReturnRest({ email, ...restUser}) {
//     console.log('Email within function', email);
//     return restUser;
// }

// const result = logEmailAndReturnRest(user);

// console.log('result', result);

//---------------------------------------

// const { ...clone } = user;
// clone.email = "new";

// console.log('user', user);
// console.log('clone', clone);
// console.log(user === clone);

//-----------------------------------------

// const table = {
//     name: 'table',
//     stock: 27,
//     price: 300,
// }

// function getStock({stock, ...resttTable}) {
//     console.log('Stock: ', stock);
//     return resttTable;
// }

// const resttTable = getStock(table);

// console.log(resttTable);

//-------------SPREAD operatorius------------------------------

// const obj = {
//     a: 'text',
//     b: 'text2',
// };

// const copy = { ...obj }; //daznas objektu kopijavimo budas

// const obj2 = {
//     a: 'x', // sita pakeis 'text', nes panaudojimas paskutinis raktas tokiu pat pavadinimu, o siuo atveju ikeliamas raktas a is obj
//     ...obj,
//     c:'text3',
//     a: obj.a + '(extended a)'
// };

// console.log('obj', obj);
// console.log('copy', copy);
// console.log('obj2', obj2);

//UZDUOTIS------------------------------

/*
Sukurti du objektus:

object user:
  name string
  email string

ir

object personalInfo:
  address string
  age number
 
Parašyti funkciją "createCustomer", kuri priima šiuos du objektus kaip argumentus ir grąžina customer objektą, sukurtą joje.

paleidus funkciją, gautą objektą išlogginti.
*/

// const user = {
//   name: "Greta",
//   email: "greta@mail.com",
// };

// const personalInfo = {
//   address: "Vilniaus g. 1",
//   age: "27",
//   number: "8638***80",
// };

// function createCustomer(user, personalInfo) {
//    return {
//        ...user,
//        ...personalInfo 
//     };
// };

// const customer = createCustomer(user, personalInfo);
// console.log(customer);


//-------------------STOPWATCH---------------------------------
import TimerState from "./timerState.js";
import { formatTime, calculateTime } from "./utilities.js";


const elements = {
    startBtn: document.querySelector('#btn-start'),
    stopBtn: document.querySelector('#btn-stop'),
    timerBox: document.querySelector('#timer'),
    resetBtn: document.querySelector('#btn-reset'),
    lapBtn: document.querySelector('#btn-lap'),
    lapContainer: document.querySelector('#lap-container'),
};

const updateTimerText = (timeElapsed) => {
    const {seconds, minutes, hours} = calculateTime(timeElapsed);
    elements.timerBox.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
};

const createLap = (lapNumber, lapTime) => {
  const lapParagraphElement = document.createElement('p');
  const lapNumberNode = document.createTextNode(`Lap:${lapNumber} `);
  const lapTimeElement = document.createElement('span');
  const {seconds, minutes, hours} = calculateTime(lapTime);
  lapTimeElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  lapParagraphElement.append(lapNumberNode, lapTimeElement);
  elements.lapContainer.append(lapParagraphElement);
};

const clearLaps = () => {
  elements.lapContainer.innerHTML = "";
};

const state = new TimerState({
  updateTime: updateTimerText,
  setLap: createLap,
  clearLaps: clearLaps
});

elements.startBtn.addEventListener('click', () => {
    state.start();
});

elements.stopBtn.addEventListener('click', () => {
    state.stop();
});

elements.resetBtn.addEventListener('click', () => {
  state.reset();
});

elements.lapBtn.addEventListener('click', () => {
  state.lap();
});

// let time = 0;

// function tick() {
//     time++;
//     console.log(time);
// };

// const currentInterval = setInterval(tick, 1000); // ms - 1 sekunde yra 1 000 ms

// function stop () {
//     clearInterval(currentInterval);
// };
