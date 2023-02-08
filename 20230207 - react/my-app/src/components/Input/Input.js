import "./Input.css";

const Input = (props) => {
  const onChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <>
      <label htmlFor="search">{props.label}</label>
      <input name="search" id="search" onChange={onChange}></input>
    </>
  );
};

export default Input;
