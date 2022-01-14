import React, { useEffect, useState } from "react";
import WeatherByDay from "../weather-by-day/weather-by-day";
import { useLocation } from "react-router-dom";
import UsAirQualityIndexTransformer from "../../helpers/airQualityHelper";

import "./current-weather.scss";

export const CurrentWeather = () => {
  const locationBrowser = useLocation();
  const searchParams = new URLSearchParams(locationBrowser.search);
  var searchTermFromparam = searchParams.get("term") ?? "Sofia";

  var apiUrl = "";

  if (searchTermFromparam !== "") {
    apiUrl =
      "//api.weatherapi.com/v1/forecast.json?key=a074730b7e2a496cb3c110546221301&q=" +
      searchTermFromparam +
      "&days=3&aqi=yes&alerts=yes";
  }

  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.error && data.error.code === 1006) {
          setWeather(undefined);
        } else {
          setWeather(data);
        }
      });
  };

  var setIntervalValue = 100000;
  useEffect(() => {
    getWeather();

    const interval = setInterval(() => {
      getWeather();
    }, setIntervalValue);

    return () => clearInterval(interval);
  }, [apiUrl]);

  if (typeof weather === "undefined")
    return (
      <div>
        <div class="alert alert-secondary" role="alert">
          No such location!
        </div>
      </div>
    );

  if (!weather) return <div>Loading ...</div>;

  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-md">
            <div className="main-current-weather-info">
              <div className="location">
                {weather.location.name}, {weather.location.country}
              </div>
              <div className="temperature"> {Math.round(weather.current.temp_c)} °C</div>
              <div className="temperature-feels-like">
                Feels like {Math.round(weather.current.feelslike_c)} °C
              </div>
              <img
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
              ></img>
              <div className="weather-condition-text">
                {weather.current.condition.text}
              </div>
              <hr />
              <div className="row">
                <div className="col-4">
                  <span className="label">Air Quality: </span> 
                  <span className="value">
                    {" "}
                    {UsAirQualityIndexTransformer(
                      weather.current.air_quality["us-epa-index"]
                    )}
                  </span>
                </div>
                <div className="col-4">
                  <span className="label">Humidity: </span>
                  <span className="value"> {weather.current.humidity}%</span>
                </div>
                <div className="col-4">
                  <span className="label">Wind: </span>
                  <span className="value">{weather.current.wind_kph} km/h</span>
                </div>
              </div>

              <hr />
              <div className="last-updated-info">
                Last updated: {weather.current.last_updated}
              </div>
            </div>
          </div>
        </div>
        <WeatherByDay forecastDays={weather.forecast.forecastday} />
      </div>
    </div>
  );
};

export default CurrentWeather;
