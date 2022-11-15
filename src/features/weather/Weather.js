import React from "react";
import { getWeather } from "../../api/weather";

export default function Weather() {
  const openWeatherMapApi = getWeather;
  console.log(openWeatherMapApi);

  return (
    <div className="weather-container">
      <h1>weather</h1>
    </div>
  );
}
