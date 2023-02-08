import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const [value, setValue] = useState();
  const handleChange = (value) => {
    setValue(value)
  };

  return (
    <div className="App">
      <Input label="Search:" onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}

export default App;
