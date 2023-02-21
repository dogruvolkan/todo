import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { todos, setTodos, value, setValue } = useContext(TodoContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const todoAdd = (e) => {
    e.preventDefault();
    if (value) {
      const newTodos = [...todos, value];
      setTodos(newTodos);
      setValue("");
    } else {
      window.alert("deger gir lan köpek");
    }
  };

  return (
    <div className="card-add">
      <form>
        <input value={value} onChange={handleChange} />
        <button onClick={todoAdd}>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
