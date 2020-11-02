import React, { useEffect, useState } from "react";
import WeatherInfoTile from "../components/weather-info-tile/weather-info-tile";

export const WeatherInfoList = () => {
  const apiUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=d399b4c72a3e4a0ba5b102144202710&q=Sofia&days=10";
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {state &&
            state.forecast.forecastday.map((element) => (
              <div className="col-md-4" key={element.date}>
                <WeatherInfoTile item={element} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherInfoList;
