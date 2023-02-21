import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ShowTodo = () => {
  const { todos, setTodos, showUpdate, setShowUpdate } =
    useContext(TodoContext);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleUpdate = (newItem, index) => {
    console.log("girdi");
    setShowUpdate(true);
    const newTodos = [...todos];
    newTodos[index] = newItem;
    setTodos(newTodos);
    console.log("çıktı");
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <ul key={index}>
            <li>
              {todo} <span onClick={() => deleteTodo(index)}>Sil</span>
              <span
                onClick={() => {
                    showUpdate ? ( 
                        
                    ) : null;
                //   const newItem = prompt("gir", todo);
                //   if (newItem) {
                //     handleUpdate(newItem, index);
                //   }
                }}
              >
                Güncelle
              </span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ShowTodo;
