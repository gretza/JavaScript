const users = [
  {
    id: Math.random(),
    firstName: "Jessica",
    lastName: "Silver",
    age: 21,
    hasIdentificationDocument: true,
    isBanned: false,
  },
  {
    id: Math.random(),
    firstName: "Tom",
    lastName: "Wood",
    age: 30,
    hasIdentificationDocument: false,
    isBanned: false,
  },
  {
    id: Math.random(),
    firstName: "Allen",
    lastName: "Green",
    age: 26,
    hasIdentificationDocument: true,
    isBanned: true,
  },
  {
    id: Math.random(),
    firstName: "Joshua",
    lastName: "Timber",
    age: 19,
    hasIdentificationDocument: true,
    isBanned: false,
  },
];

const usersWithAge21OrOver = users.filter((user) => {
  if (user.age >= 21) {
    return true;
  }
  return false;
});

//ARBA
// const usersWithAge21OrOver = users.filter(() => user.age >=21);

//ARBA
// const usersWithAge21OrOver = users.filter((user) => {
//     if (user.age >= 21) {
//       return true;
//     }
//   });

//ARBA
// const usersWithAge21OrOver = users.filter((user) => {
//  return user.age>=21;
//   });


// Išfiltruoti userius, kurių amžius daugiau arba lygu 20, turi id ir nera uzbanintas

const legalAgeWithIdNotBanned = users.filter((user) => {
    if (user.age >= 20 && user.hasIdentificationDocument && !user.isBanned) {
        return true;
    }
});

//-------------------------------MAP------------------------------------

const usersFirstNames = users.map((user) => {
    return user.firstName;
})

// console.log(usersFirstNames);

// Surinkti userius, kurie turi id ir paversti i objekta, kuris turi firstName ir Id

const usersWithId = users.filter((user) => {
    return user.hasIdentificationDocument;
});

const preparedUsers = usersWithId.map((user) => {
    return {
        id: user.id,
        firstName: user.firstName,
    }
})
console.log(preparedUsers);

//-------------------------------REDUCE-----------------------------------


//expected output [underAgedUsersArray, restOfUsersArray] where underAgedUsers and restOfUsers = [...users]

const userGroups = users.reduce((acc, user) => {
    if (user.age >= 21) {
        acc[1].push(user);
    } else {
        acc[0].push(user);
    }
    return acc;
}, [[], []]);

const userGroupAsObject = users.reduce((acc, user) => {
    if (user.age >=21) {
        acc.adults.push(user);
    } else {
        acc.underage.push(user);
    }
    return acc;
}, {underage: [], adults: []})

console.log(userGroupAsObject);

const helloText = users.reduce((welcomingText, user, index) => {
    return `${welcomingText}${index ? ', ': ' '}${user.firstName}`;
}, "Hello:")

console.log(helloText);

// group adults into two groups: isBanned and hasDocuments

const hasDocument = users.filter((user) => {
    return user.hasIdentificationDocument;
});

const validUsers = hasDocument.reduce((acc, user) => {
    if (user.isBanned) {
        acc.bannedUsers.push(user);
    } else {
        acc.notBannedUsers.push(user);
    }
    return acc;
}, {bannedUsers: [], notBannedUsers: []});

console.log(validUsers);