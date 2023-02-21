import "./App.css";
import { TodoContextProvider } from "./context/TodoContext";
import Time from "./component/Time";
import AddTodo from "./component/AddTodo";
import ShowTodo from "./component/ShowTodo";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <div className="card-todo">
          <Time />
          <AddTodo />
          <ShowTodo />
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
