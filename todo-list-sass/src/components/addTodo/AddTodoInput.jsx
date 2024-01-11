import React, { useState } from "react";
import "./index.scss";

const AddTodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => setInputValue(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      addTodo({
        id: new Date().getTime(),
        todo: inputValue,
        completed: false,
        userId: "",
      });

      setInputValue("");
    }
  };

  return (
    <form className="AddTodoInput" onSubmit={onHandleSubmit}>
      <input
        className="AddTodoInput__input"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter Your To DO Item"
      />
      <button className="AddTodoInput__btn" type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodoInput;
