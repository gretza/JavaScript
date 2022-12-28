//String
const singleQuotes = 'single quotes';
const doubleQuotes = "double quotes"
const stringInterpolation = `I can variable into myself ${singleQuotes}, ${doubleQuotes},

${addTwpNumbers}

withNoReturn: ${withNoReturn()};
withReturnOfNothinf: ${withReturnOfNothinf()};
withReturnSomeValue: ${withReturnSomeValue(2, 4)}

`;

//Numbers
const x = 2;
const y = 3;
const t1 = 2_000_000_000;
const i = 2.2;


//Booleans
const t = true; //true
const f = false; //false
const truthy = ' ' && 1 && -1 && {}; //truthy
const falsy = NaN //falsy (0, "", undefined, null, NaN)

if(falsy) {
    console.log('worked');
}


//Functions

function addTwpNumbers(num1, num2) {
    return num1 + num2;
}


function withNoReturn (){};
function withReturnOfNothinf() {
    return;
}
function withReturnSomeValue(num1 = 2, num2 = 2) {
    return num1 + num2;
}




function addEventListener(action, callback) {
   const event = 'event';
    if(action === 'click') {
        callback('event')
    }
}

addEventListener('click', callBackFunction);

function callBackFunction(event) {
    // console.log(event);
}


//Deletion of properties
console.log('--------DELETION------------');
const dog = {
    name: "doggy",
    car: "audi"
};
dog.name = ' ';
const dynamicKey = 'name';
delete dog.car;
delete dog[dynamicKey];
console.log(dog);


//Equality
console.log('---------EQUALITY-----------');
const object1 = {name: 'name', };
const object2 = {name: 'name', };

console.log(object1 === object2);
console.log(object1 == object2);


// Recursive function is a function that calls itself until it doesn't
let step = 0;
function recursive() {
    if (step === 10) {
        return;
    }
    step++;
    console.log(step);
    recursive()
}

recursive();