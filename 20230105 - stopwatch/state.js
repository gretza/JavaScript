// start ir stop mygtukai

// kai paspaudžiame start, kas sekundę sekame kintantį laiką
// ir išrodome didėjantį laika laikroduke

// kai paspaudžiame stop, laikrodukas turi sustoti

// const state = {
//   secondsElapsed: 0,
//   intervalId: null,


//   start(updateCallBack) {
//     // paleisti intervalą, kuris tiksi ir didina laiką
//     if (!state.intervalId){
//     state.intervalId = setInterval(function(){
//         state.secondsElapsed++;
//         updateCallBack(state.secondsElapsed);
//     }, 1000);
//     }
//   },

//   stop() {
//     // sustabdo intervalą, kuris "tiksi"
//     if(state.intervalId) {
//     clearInterval(state.intervalId);
//     state.intervalId = null;
//     };
//   },
// };

// export default state;

class TimerState {
  constructor() {
    this.secondsElapsed = 0;
    this.intervalId = null;
  };

  start(updateCallBack) {
    // paleisti intervalą, kuris tiksi ir didina laiką
    if (!this.intervalId){
    this.intervalId = setInterval(() =>{
        this.secondsElapsed++;
        updateCallBack(this.secondsElapsed);
    }, 1000);
    }
  };

  stop() {
    // sustabdo intervalą, kuris "tiksi"
    if(this.intervalId) {
    clearInterval(this.intervalId);
    this.intervalId = null;
    };
  };
};


export default TimerState;