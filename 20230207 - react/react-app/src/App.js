import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Buttons";
import ClickedMeTimes from "./components/ClickedMeTimes/ClickedMeTimes";

function App() {
  const [counter, setCounter] = useState();
  const onClick = () => {
    const newState = counter + 1
    setCounter(counter++);
  }
  return (
    <div className="App">
      <Button label="Press me" onClick={onClick}/>
      <ClickedMeTimes counter={counter}/>
    </div>
  );
}

export default App;
