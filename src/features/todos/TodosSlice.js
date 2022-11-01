import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    entries: [
      {
        text: "water plants",
        isDone: false,
      },
      {
        text: "making spaget",
        isDone: false,
      },
      {
        text: "climb v10",
        isDone: false,
      },
      {
        text: "code 1 hours",
        isDone: false,
      },
    ],
    doneEntries: [],
  },
  reducers: {
    addEntry: (state, action) => {},
  },
});
