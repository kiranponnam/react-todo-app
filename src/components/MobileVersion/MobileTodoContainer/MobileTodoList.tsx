import React from "react";
import { MobileTodoForm } from "./MobileTodoForm";
import "./MobileTodolist.css";
import { useSelector } from "react-redux";
import Todos from "./todos/todos";

export const MobileTodoList = () => {
  const todos = useSelector((state: any) => state?.todo?.todos);

  return (
    <React.Fragment>
      <div className="todoListTitle">TODO LIST</div>
      <div className="todoMainContainer">
        <div className="todo-list">
          <MobileTodoForm />
          {todos?.map((todo: any, index: any) => {
            return <Todos key={index} todo={todo} index={index} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
