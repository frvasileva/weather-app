import React from "react";

import "./weather-by-day.scss";

export const WeatherByHours = (props) => {
  var element = props.element;

  return (
    <div>
      {props.isExpanded && <p>Humidity: {element.day.avghumidity} %</p>}
      {props.isExpanded && <p>Chance of rain: {element.day.daily_chance_of_rain} %</p>}
      {props.isExpanded && <p>Chance of snow: {element.day.daily_chance_of_snow} %</p>}
    </div>
  );
};

export default WeatherByHours;
