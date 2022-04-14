import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

const TodoForm: FC<any> = (props: any) => {
  const [value, setValue] = React.useState<any>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    props?.addTodo(value);
    setValue("");
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
export default TodoForm;
