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
    addEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
    },
    toggleEntryDone: (state, action) => {
      // state.entries[action.payload].isDone =
      //   !state.entries[action.payload].isDone;
      console.log(state.entries[action.payload].isDone);
    },
  },
});

export const { addEntry, removeEntry, toggleEntryDone } = todosSlice.actions;
export default todosSlice.reducer;
