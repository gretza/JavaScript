export const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

export const calculateTime = (secondsElapsed) => {
  const seconds = secondsElapsed % 60;
  const minutes = Math.floor(secondsElapsed / 60) % 60;
  const hours = Math.floor(Math.floor(secondsElapsed / 60) / 60);
  return { hours, minutes, seconds };
};


// const time = 120;
// const second = time % 60;
// const minutes = Math.floor(time / 60) % 60;
// const hours = Math.floor(Math.floor(time / 60) / 60);

// ternary expression------------

// const variable = condition ? "true" : "false";
// const timeString = time < 10 ? `0${time}` : time;

// // examples
// const time = 10;
// const timeString = time < 10 ? `0${time}` : time;

// let answer = 0;

// if (time < 10) {
//   answer = `0${time}`;
// } else if (time > 60) {
//   answer = time % 60;
// } else {
//   answer = time;
// }

// ternary expression
// if time < 10 ? `0${time}` : if time > 60 ? time % 60 : time

// const answer1 = time < 10 ? `0${time}` : time > 60 ? time % 60 : time;

/**
 * ? - nurodo kad buvo parašyta sąlyga
 * : - atskiria vertę if true nuo vertės if false formatu:
 * <true> : <false>
 *
 * <condition|boolean> ? <true value> : <false value>
 * <condition|boolean> ? <true value> : <condition|boolean> ? <second true value> : <false value>
 */
