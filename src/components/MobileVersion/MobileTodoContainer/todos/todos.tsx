import React, { FC, useState } from "react";
import "../../../../App.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import {
  completedTodo,
  deleteTodoItem,
} from "../../../reduxToolkit/todo/todoSlice";
import { ConfirmDialog } from "../../../ConfirmDialog";
import EditIcon from "@mui/icons-material/Edit";

const Todos: FC<any> = (props: any) => {
  const dispatch = useDispatch();
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <ConfirmDialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onClickRow={props?.todo}
        isMobile={true}
      />
      <div
        className="todo"
        style={{
          textDecoration: props?.todo?.completed ? "line-through" : "",
          textTransform: "capitalize",
        }}
      >
        <h4> {props?.todo.task}</h4>
        <div className="todosIconContainer">
          <Tooltip title="Edit">
            <EditIcon
              onClick={() => {
                setDialogOpen(true);
              }}
            />
          </Tooltip>
          <Tooltip title="completed">
            <CheckSharpIcon
              onClick={() => dispatch(completedTodo(props?.index))}
              className="iconMarginContainer"
            />
          </Tooltip>
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteTodoItem(props?.index))}
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
