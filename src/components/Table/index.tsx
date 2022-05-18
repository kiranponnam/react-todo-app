import {
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { ConfirmDialog } from "../ConfirmDialog";
import "./table.css";
import { getDateFormatted } from "../utility";
import { useDispatch } from "react-redux";
import { deleteTodoItem } from "../reduxToolkit/todo/todoSlice";

export default function TodoTable(props: any) {
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState<any>([]);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [onClickRow, setOnClickRow] = useState<any>([]);

  useEffect(() => {
    setRowData(props?.todos);
  }, [props?.todos]);

  const deleteTodo = (id: number) => {
    dispatch(deleteTodoItem(id));
  };

  return (
    <TableContainer component={Paper}>
      <ConfirmDialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onClickRow={onClickRow}
      />
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="center">S.No</TableCell>

            <TableCell align="center">Due Date</TableCell>

            <TableCell align="center">Task</TableCell>

            <TableCell align="center">Status</TableCell>

            <TableCell align="center">
                Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row: any, index: any) => (
            <TableRow key={index} onClick={() => setOnClickRow(row)}>
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">
                {getDateFormatted(row?.date)}
              </TableCell>
              <TableCell align="center"   style={{ width: 100 }}>{row?.task}</TableCell>
              <TableCell align="center">{row?.status===undefined?"active":row?.status}</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit">
                  <EditIcon
                    onClick={() => {
                      setDialogOpen(true);
                      setOnClickRow(row);
                    }}
                  />
                </Tooltip>
                <Tooltip title="delete">
                  <DeleteOutline
                    onClick={() => deleteTodo(index)}
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
