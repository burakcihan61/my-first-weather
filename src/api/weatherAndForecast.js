import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "bb1aa781385ad9e8d51b62dbf9b1b446",
        units: "metric",
      },
    }
  );

  return response;
}

export default getWeatherAndForecast;
