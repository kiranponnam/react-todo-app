import React, { FC } from "react";
import '../../App.css'
const Todos: FC<any> = (props:any) => {
  return (
    <React.Fragment>
      <div
        className="todo"
        style={{ textDecoration: props?.todo?.isCompleted ? "line-through" : "" }}
      >
        {props?.todo?.text}
        <div>
          <button onClick={() => props?.completeTodo(props?.index)} style={{margin:'2px'}}>Complete</button>
          <button onClick={() => props?.removeTodo(props?.index)} style={{margin:'2px'}}>x</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Todos;
