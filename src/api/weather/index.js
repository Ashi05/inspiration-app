const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=a11f388d6c658cf542564e2c61dd0fac
&units=imperial`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp,
  };
};

const openWeatherMapApi = {
  getWeather,
};

export default openWeatherMapApi;
