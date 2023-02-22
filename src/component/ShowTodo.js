import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ShowTodo = () => {
  const { todos, setTodos, showTodo, setValue, setShowTodo } =
    useContext(TodoContext);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  if (todos.length > 0) {
    setShowTodo(true);
  } else {
    setShowTodo(false);
  }

  const updateTodo = (index, todo) => {
    setValue(todo);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleActive = (event) => {
    event.currentTarget.classList.toggle("text-line");
  };

  return (
    <div className="card-show">
      <hr />
      {showTodo ? (
        todos.map((todo, index) => {
          return (
            <ul key={index}>
              <li>
                <p onClick={handleActive} className="todo-text">
                  {todo}
                </p>
                <div className="todo-btns">
                  <p
                    className="update-btn"
                    onClick={() => updateTodo(index, todo)}
                  >
                    update
                  </p>
                  <p className="delete-btn" onClick={() => deleteTodo(index)}>
                    delete
                  </p>
                </div>
              </li>
            </ul>
          );
        })
      ) : (
        <p className="show-task">Let's add a new task</p>
      )}
    </div>
  );
};

export default ShowTodo;
