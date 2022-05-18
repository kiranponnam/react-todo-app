import React from "react";
import TodoTable from "../../Table";
import { TodoAddForm } from "../TodoAddForm";
import "./TodoList.css";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state: any) => state?.todo?.todos);

  return (
    <React.Fragment>
      <div className="todoListTitle">TODO LIST</div>
      <div className="todoMainContainer">
        <div className="todo-list">
          <TodoAddForm />
          <TodoTable todos={todos?.length > 0 ? todos : []} />
        </div>
      </div>
    </React.Fragment>
  );
};
