import TodoForm from "./components/TodoForm";
import Container from "./components/Container";
import PageHeaading from "./components/PageHeading";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

// const list = [
//   "Todo item 1",
//   "Todo item 2",
//   "Todo item 3",
//   "Todo item 4",
//   "Todo item 5",
//   "Todo item 6",
//   "Todo item 7",
//   "Todo item 8",
//   "Todo item 9",
//   "Todo item 10",
// ];

function App() {
  const [list, setList] = useState([]);

  const updateList = (value) => {
    const newList = [...list, value];
    setList(newList);
  };

  return (
    <div>
      <Container>
        <PageHeaading />
        <TodoForm
          onSubmit={updateList}
        />
        <hr />
        <ToDoList list={list} />
      </Container>
    </div>
  );
}

export default App;
