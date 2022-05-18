import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

const getId = (state: any) => {
  return (
    state.todos.reduce(
      (maxId: any, todo: any) => Math.max(todo.id, maxId),
      -1
    ) + 1
  );
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: any, action: any) => {
      const newTodo = {
        id: getId(state),
        task: action.payload.value,
        date: action.payload.date,
        status: action.payload.status,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    completedTodo: (state: any, action: any) => {
      const todo = state.todos.find((item: any) => item.id == action.payload);
      todo.completed = !todo.completed;
    },
    deleteTodoItem: (state: any, action: any) => {
      const newTodo = [...state.todos];
      newTodo.splice(action.payload, 1);
      state.todos = newTodo;
    },
    updateTodoItem : (state:any, action:any) => {
        const index = state?.todos.findIndex(function (text: any) {
            return (
              text?.task.toLowerCase() === action.payload.task.toLowerCase()
            );
          });
      const newTodo =[...state.todos];
      newTodo[index] = action.payload.updatedTodo
      state.todos = newTodo
    }
  },
});
export const { addTodo, completedTodo, deleteTodoItem, updateTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
