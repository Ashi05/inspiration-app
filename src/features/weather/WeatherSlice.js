import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import openWeatherMapApi from "../../api/weather";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ city, state }) => openWeatherMapApi.getWeather(city, state)
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Seattle",
    state: "Washington",
    metadata: {},
    temperature: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.metadata = action.payload.weatherMetadata;
      state.temperature = action.payload.temperature;
    },
  },
});

export const { setCity, setState } = weatherSlice.actions;
export default weatherSlice.reducer;
