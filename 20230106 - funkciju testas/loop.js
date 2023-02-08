// cycles/loops

const orderNumberOfCars = (numberOfCars) => {
  for (let i = 1; i <= numberOfCars; i++) {
    console.log(`car ${i} has been ordered`);
  }

  console.log("finished");
};

orderNumberOfCars(1);

// types of cycles: for, while, do...while

const manufactureCars = (availableParts) => {
  let i = 1;

  while (i <= availableParts) {
    console.log(`manufacture a car with number: ${i}`);
    i++;
  }

  console.log("finished");
};

manufactureCars(1);

const writeATicket = (isSpeeding) => {
  const maxTicketsCount = 2;
  let i = 1;
  do {
    if (i === maxTicketsCount) {
      console.log("Your drivers licence has been revoked.");
      break;
    } else {
      console.log("Driver has received a ticket for speeding");
    }
    i++;
  } while (isSpeeding && maxTicketsCount >= i);
};

writeATicket(true);

function addSeperator(task) {
  const prefixSuffix = "-----------------";
  console.log(`${prefixSuffix}${task}${prefixSuffix}`);
}

//-------------------------------------------------------------
addSeperator("BONUS");

const getFactorialFor = (number) => {
  if (number <= 1) {
    return 1;
  }

  for (let i = number - 1; i > 1; i--) {
    number = number * i;
  }

  return number;
};

console.log(getFactorialFor(5));

const getFactorialWhile = (number) => {
  let i = number;
  if (number <= 1) {
    return 1;
  }
  while (number > 1) {
    number--;
    i = i * number;
  }
  return i;
};

console.log(getFactorialWhile(5));

const getFactorialDoWhile = (number) => {
  let i = 1;
  do {
    i *= number;
    number--;
    } while (number > 1);
  return i;
};

console.log(getFactorialDoWhile(5));

const checkIsPrime = (number) => {

    const testNumber = (x) => {
      if (x === 1) {
        return false;
      };
    
      if (x === 2) {
        return true;
      }
    
      if (number % (x - 1)  === 0) {
        return false;
      }
    
      return testNumber(x - 1);
    }
  
    return testNumber(number);
  };

const checkIsPrimeFor = (number) => {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    }  else {
    for (let i = number - 1; i > 2; i--) {
        number % i;
        console.log(number);
    }};   
};

checkIsPrimeFor(5);