/*
1.Pagrindinis failas main.js
2.sukurkite constants.js faila, kuriame yra trys kintamieji su teksto žinutėmis
"TEXT_1", "TEXT_1", "TEXT_3" jie yra eksportuojami su "export const TEXT_1"
3. Sukurkite logger.js failą, su funkcija, kuri priima argumentą ir išloggina jį.
naudoti default exportą.
4. main.js faile importuokites constants.js ir logger.js failus ir kiekvienam tekstui iškvieskite logger.js funkciją

*/

import {TEXT_1, TEXT_2, TEXT_3} from "./constants.js";
import logData from "./logger.js";

logData(TEXT_1);
logData(TEXT_2);
logData(TEXT_3);



const value = 'some value';
const value2 = 'some value2';

const obj1 = {
    key: value, //property (key and value);   //value changed in 111
    key2: value2,
    key3: 1,
    key4: false,
    key5: {
        key1: value,
        key2: {
            key1: value,
            key2: {
                key1: value, //61 eulutej updatina value is 'some value' to 'updated value'
            },
        },
    },
    key6: function() {
        console.log('I am key6 value');
    }, //method
    "key 7": undefined, //key pavadinime negali būti tarpelio, nebent detume kaip stringa 'key 7', bet paprastai taip nedaroma,
    key8: null,
    //key10: 10
};

obj1.key3 //1
obj1.key8 //undefined

if(obj1.key9) {
    //do something with obj1.key9 value
}

//will create a key since it was not able to find one with key as 'key10'
obj1.key10 = 10

//will assign 'key3' value to a variable
const previouValueOfKey3 = obj1.key3;

//will change key3 value in object since it was able to find key as 'key3'
obj1.key3 = 2;

//Function
function func() {

}

func(); 
obj1.key6();

obj1.key5.key2.key2.key1;
console.log(obj1.key5.key2.key2.key1);

console.log(obj1['key 7']); //pasirinkti su square brackets []


//represents some key
const inputValue = 'color';
obj1[inputValue] = 'red';


obj1.key5.key2.key1 = 'updated value',
console.log(obj1.color); // color: red,


///---------------HOW TO COMPARE OBJECTS-------------- ????????

const obj2 = {
    key: value, //property (key and value);
    key2: value2,
    key3: 1,
    key4: false,
    key5: {
        key1: value,
        key2: {
            key1: value,
            key2: {
                key1: value, //61 eulutej updatina value is 'some value' to 'updated value'
            },
        },
    },
    key6: function() {
        console.log('I am key6 value');
    }, //method
    "key 7": undefined, //key pavadinime negali būti tarpelio, nebent detume kaip stringa 'key 7', bet paprastai taip nedaroma,
    key8: null,
    //key10: 10
}

if (obj1 === obj2) {
    console.log('They are the same objects'); // neveikia, nes taip palyginti negalime
}

const obj3 = {
    firstName: 'Vardenis',
}

const obj4 = {
    firstName: 'Vardenis',
}

if (obj3.firstName === obj4.firstName) {
    console.log('These objects are equal');
}

const obj5 = obj1;

if (obj5 === obj1) {
    console.log('obj5 is equal to obj1');
}

obj5.key = 'obj5 has change key value';


//-----------------FUNCTIONS-----------

const arg1 = 1;
const arg2 = 2;

function func1(arg1, arg2) {
    console.log(arg1, arg2)
    if (arg1 > 5) {
        return 5;
    }

    return arg1 + arg2 //sitas return nesuveiks, jei if'e esantis return suveiks
}

func1(1, 2); //arg1 = 1, arg2 = 2 //galima rasyti func1(arg1, arg2) ir bus ta pati reiksme, nes yra constantos su tomis reiksmemis;

const result = func1(arg1, arg2);  /// 1+2 = 3

//--------------Arrow function-----------

const arrowFunction = () => {} // tas pats kas 136, bet sita negali buti iskviesta pries konstantos pateikima, o 136 gali

function regularFunction() {
}