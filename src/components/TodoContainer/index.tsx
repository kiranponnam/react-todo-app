import React, { FC } from "react";
import { TodoList } from "./TodoList";

export const TodoContainer: FC<any> = () => {
  return (
    <React.Fragment>
      <TodoList />
    </React.Fragment>
  );
};
