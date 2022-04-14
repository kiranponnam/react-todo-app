import React from "react";
import "./App.css";
import Todos from "./components/todos/todos";
import TodoForm from "./components/todoForm/todoForm";

function App() {
  const [todos, setTodos] = React.useState<any>([]);
  const addTodo = (text: any) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index: any) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index: any) => {
    const newTods = [...todos];
    newTods.splice(index, 1);
    setTodos(newTods);
  };
  return (
    <div className="app">
      <div className="todoListTitle">TODO LIST</div>
      <div className="todoMainContainer">
        <div className="todo-list">
          <TodoForm addTodo={addTodo} />
          {todos?.map((todo: any, index: any) => {
            return (
              <Todos
                key={index}
                todo={todo}
                index={index}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
