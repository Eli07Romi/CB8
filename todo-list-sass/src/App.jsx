import React, { useState, useEffect } from "react";
import AddTodoInput from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [valueData, setValueData] = useState("");
  const [newTodo, setNewTodo] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos.slice(0, 5))); // ho richiesto solo 5 cosi da non avere una lista troppo lunga
  }, []);

  const handleSetValueData = (value) => {
    setValueData(value);
  };

  const handleAddTodo = (todo) => {
    setTodoList((prev) => [todo, ...prev]);
    setNewTodo(todo);
    setValueData("");
  };

  return (
    <div className="App">
      <h1>To-do List</h1>

      <AddTodoInput setValueData={handleSetValueData} addTodo={handleAddTodo} />

      {todoList.map((todo) => (
        <TodoItem todoItemData={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
