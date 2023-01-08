const user = {
  email: "myemail@gmail.com",
  myName: "Vardenis",
  someMethod() {
    console.log("hello");
  },
  innerObject: { someProperty: "hello" },
  age: 27,
};

const {
  myName: anotherName,
  email,
  someMethod,
  innerObject: { someProperty },
} = user; // nukopijuojame myName iš objekto, naudojant jo raktą console.log(email);console.log(anotherName);someMethod();

logUser(user);

function logUser({ myName, age, email }) {
  // myName = "otherName";
  console.log(email);
  console.log(myName);
  console.log(age);
}

logUser({
  email: "newEmail@gmail.com",
  myName: "new name",
  age: 18,
});

//sukurkite funkcija, kuri priima objekta
//su 'prekiu kaina', 'siuntimo kaina' ir 'administraciniu mokesciu'
//ir is log'ina pvm (21proc nuo sudetos sumos)
//funkcija turi destrukturizuoti tris atributus

//price shiping price administration fee

//iskviesti funkcija du kartus:
//1. sukurti objekto konstanta ir ja paduoti i funkcija
//2.panaudoti inline objekta i funkcija nenaudojant konstantos

const object = {
  price: 25,
  shipingPrice: 5,
  administrationFee: 3,
};

pvmCalculation(object);

function pvmCalculation({ price, shipingPrice, administrationFee }) {
  const pvm = (price + shipingPrice + administrationFee) * 0.21;
  console.log(pvm);
}

pvmCalculation({
  price: 50,
  shipingPrice: 10,
  administrationFee: 6,
});
