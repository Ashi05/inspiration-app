import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/TodosSlice";
import weatherReducer from "../features/weather/WeatherSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    weather: weatherReducer,
  },
});
