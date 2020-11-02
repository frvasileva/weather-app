import React, { useEffect, useState } from "react";
import WeatherByDayDetails from "./weather-by-day-details";

import "./weather-by-day.scss";

export const WeatherByDay = (props) => {
  var forecast = props.forecastDays;

  if (!forecast) return <div>Loading ...</div>;

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <ul className="list-group-flush">
            {forecast.map((element) => (
              <li className="list-group-item" key={element.date}>
                <WeatherByDayDetails element={element} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherByDay;
