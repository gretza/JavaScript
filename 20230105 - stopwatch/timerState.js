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
  constructor({updateTime, setLap, clearLaps}) {
    this.secondsElapsed = 0;
    this.lastLapTime = 0;
    this.lapNumber = 0;
    this.intervalId = null;
    this.updateTime = updateTime;
    this.setLap = setLap;
    this.clearLaps = clearLaps;
    this.updateTime(0);

  };

  start() {
    if (!this.intervalId){
    this.intervalId = setInterval(() => {
        this.secondsElapsed++;
        this.updateTime(this.secondsElapsed);
    }, 1000);
    }
  };

  stop() {
    if(this.intervalId) {
    clearInterval(this.intervalId);
    this.intervalId = null;
    };
  };

  lap() {
    this.lapNumber++;
    const lapTime = this.secondsElapsed - this.lastLapTime;
    this.lastLapTime = this.secondsElapsed;
    this.setLap(this.lapNumber, lapTime);
  };

  reset() {
    this.stop();
    this.secondsElapsed = 0;
    this.lastLapTime = 0;
    this.lapNumber = 0;
    this.updateTime(0);
    this.clearLaps();
  };
};


export default TimerState;