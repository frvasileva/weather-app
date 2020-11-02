import React, { useEffect, useState } from "react";
import WeatherByDay from "../weather-by-day/weather-by-day";
import CurrentWeatherByHour from "./current-weather-by-hour";

import "./current-weather.scss";

export const CurrentWeather = (props) => {
  var term = props.location || "Pernik";
  const [searchTerm, setSearchTerm] = useState(term);

  const apiUrl =
    "//api.weatherapi.com/v1/forecast.json?key=d399b4c72a3e4a0ba5b102144202710&q=" +
    term +
    "&days=5";

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, [apiUrl]);

  if (!weather) return <div>Loading ...</div>;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="main-current-weather-info">
              <div className="location">
                {weather.location.name}, {weather.location.country}
              </div>

              <div className="temperature"> {weather.current.temp_c} °C</div>
              <div className="temperature-feels-like">
                Feels like {weather.current.feelslike_c} °C
              </div>
              <img
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
              ></img>
              <div className="weather-condition-text">
                {weather.current.condition.text}
              </div>
            </div>
          </div>
        </div>
        <WeatherByDay forecastDays={weather.forecast.forecastday} />
        <CurrentWeatherByHour forecastHours={weather.forecast} />
      </div>
      )
    </div>
  );
};

export default CurrentWeather;
