import { Box, Button, InputLabel, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { getDateFormatted } from "../utility";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { updateTodoItem } from "../reduxToolkit/todo/todoSlice";

export const ConfirmDialog = (props: any) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>(new Date());
  const [status, setTaskStatus] = useState<string>("active");

  useEffect(() => {
    setValue(props?.onClickRow?.task);
    setDate(new Date(props?.onClickRow?.date));
    setTaskStatus(
      props?.onClickRow?.status === undefined
        ? "active"
        : props?.onClickRow?.status
    );
  }, [
    props?.onClickRow?.task,
    props?.onClickRow?.date,
    props?.onClickRow?.status,
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props?.onClose();
    dispatch(
      updateTodoItem({
        task: props?.onClickRow?.task,
        updatedTodo: {
          id: props?.onClickRow?.id,
          task: value,
          date: date,
          status: status,
        },
      })
    );
    if (!value) return;
    props?.onClose();
    setTaskStatus("");
  };

  const statusChange = (event: SelectChangeEvent) => {
    setTaskStatus(event.target.value);
  };
  return (
    <React.Fragment>
      <Dialog open={props?.open} onClose={props?.onClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Box display={"flex"} flexDirection="row" alignItems={"center"}>
              <TextField
                label="update todo"
                autoFocus
                margin="dense"
                variant="outlined"
                className="input"
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                style={{ margin: "5px", width: "192px" }}
                size="small"
              />
              {props?.isMobile !== true ? (
                <>
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
                          style={{ width: "192px", margin: "5px" }}
                          margin="dense"
                        />
                      )}
                    />
                  </LocalizationProvider>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">status</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={status}
                      label="Age"
                      onChange={statusChange}
                    >
                      <MenuItem value={"active"}>active</MenuItem>
                      <MenuItem value={"inactive"}>inactive</MenuItem>
                    </Select>
                  </FormControl>
                </>
              ) : (
                ""
              )}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={props?.onClose}>Cancel</Button>
            <Button variant="contained" type="submit">
              update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};
