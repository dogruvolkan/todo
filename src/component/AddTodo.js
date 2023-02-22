import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  
  const { todos, setTodos, value, setValue } = useContext(TodoContext);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      window.alert("pardon değer girer misiniz ?");
    }
  };

  return (
    <div className="card-add">
      <form>
        <input
          value={value}
          onChange={handleChange}
          placeholder="Add a task..."
        />
        <button onClick={todoAdd}>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
