import { useState } from "react";
import Input from "./input";

const formStyle = {
  display: "flex",
  height: "45px",
};

const buttonStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#333",
  padding: "0.5rem",
  fontWeight: "bold",
  color: "#eee",
};

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (myValue) => setInputValue(myValue);
  const handleClick = () => {
    if(props.onSubmit) {
      props.onSubmit(inputValue);
    }
  };

  return (
    <div>
      <div style={formStyle}>
        <Input value={inputValue} onChange={handleChange} />
        <button style={buttonStyle} onClick={handleClick}>
          Add todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
