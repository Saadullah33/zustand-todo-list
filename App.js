import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoListing from "./components/TodoListing";
import { useTodoStore } from "./store/store";

function App() {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  // const [listTodo, setListTodo] = useState([]);
  // let addList = (inputText) => {
  //   if (inputText !== "") {
  //     setListTodo([...listTodo, inputText]);
  //   }
  // };

  // const deleteListItem = (key) => {
  //   let newListTodo = [...listTodo];
  //   newListTodo.splice(key, 1);
  //   setListTodo([...newListTodo]);
  // };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoList addList={addTodo} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {todos.map((todo) => {
          return (
            <TodoListing key={todo.id} item={todo} deleteItem={removeTodo} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
