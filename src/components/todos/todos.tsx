import React, { FC } from "react";
import "../../App.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import Tooltip from "@mui/material/Tooltip";

const Todos: FC<any> = (props: any) => {
  return (
    <React.Fragment>
      <div
        className="todo"
        style={{
          textDecoration: props?.todo?.isCompleted ? "line-through" : "",
          textTransform: "capitalize",
        }}
      >
        <h4> {props?.todo?.text}</h4>
        <div className="todosIconContainer">
          <Tooltip title="completed">
            <CheckSharpIcon
              onClick={() => props?.completeTodo(props?.index)}
              className="iconMarginContainer"
            />
          </Tooltip>
          <IconButton
            aria-label="delete"
            onClick={() => props?.removeTodo(props?.index)}
            className="iconMarginContainer"
          >
            <Tooltip title="delete">
              <DeleteIcon />
            </Tooltip>
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Todos;
