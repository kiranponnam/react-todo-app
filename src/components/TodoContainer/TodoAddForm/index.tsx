import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { useDispatch } from "react-redux";
import { getDateFormatted } from "../../utility";
import { addTodo } from "../../reduxToolkit/todo/todoSlice";

export const TodoAddForm: FC<any> = () => {
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
        <p style={{ margin: "4px" }}>Add your item here</p>
        <TextField
          label="add todo"
          variant="outlined"
          className="input"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          style={{ marginBottom: "5px", width: "192px", margin: "5px" }}
          size="small"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="due date"
            value={getDateFormatted(date)}
            onChange={(newValue: any) => {
              setDate(newValue);
            }}
            minDate={new Date()}
            views={["year", "month", "day"]}
            renderInput={(params: any) => (
              <TextField
                {...params}
                size="small"
                style={{ marginBottom: "5px", width: "192px", margin: "5px" }}
              />
            )}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          type="submit"
          startIcon={<AddBoxIcon />}
          style={{ marginLeft: "4px", width: "70px", margin: "5px" }}
        >
          Add
        </Button>
      </form>
    </React.Fragment>
  );
};
