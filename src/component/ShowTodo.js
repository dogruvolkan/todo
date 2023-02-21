import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ShowTodo = () => {
  const { todos, setTodos, showTodo, setShowTodo } = useContext(TodoContext);

 

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    
  };

  

  return (
    <div className="card-show">
    <hr />
      {showTodo
        ? todos.map((todo, index) => {
            return (
              <ul key={index}>
                <li>
                  <p>{todo}</p>
                  <p className="delete-btn" onClick={() => deleteTodo(index)}>delete</p>
                </li>
              </ul>
            );
          })
        : <p className="show-task">Let's add a new task</p>}
    </div>
  );
};

export default ShowTodo;
