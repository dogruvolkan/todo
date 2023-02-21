import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState(false);
  const [isactive, setIsActive] = useState(false);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        value,
        setValue,
        showTodo,
        setShowTodo,
        isactive,
        setIsActive,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
