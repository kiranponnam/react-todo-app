import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import { useDispatch, } from "react-redux";
import { addTodo } from "../../reduxToolkit/todo/todoSlice";

export const MobileTodoForm: FC<any> = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo({ value, date }));
    setValue("");
    setDate(new Date());
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <TextField
          label="add todo"
          variant="outlined"
          className="input"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          style={{ marginBottom: "5px", width: "192px" }}
          size="small"
        />
        <Button
          variant="contained"
          type="submit"
          startIcon={<AddBoxIcon />}
          style={{ marginLeft: "4px",width:'70px' }}
        >
          Add
        </Button>
      </form>
    </React.Fragment>
  );
};
