import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Seattle",
    state: "Washington",
    metadata: {},
    temprature: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { setCity, setState } = weatherSlice.actions;
export default weatherSlice.reducer;
