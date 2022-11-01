import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../features/todos/TodosSlice";

export const store = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});
