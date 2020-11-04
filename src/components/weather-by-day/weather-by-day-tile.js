import React from "react";

import "./weather-by-day.scss";

export const WeatherByDayTile = (props) => {
  var element = props.element;

  if (props.isExpanded)
    return (
      <div>
        <div className="row">
          <div className="col-6 item-wrapper">
            <span className="wi wi-humidity" title="Humidity"></span>
            {element.day.avghumidity} %
          </div>

          <div className="col-6 item-wrapper">
            <span className="wi wi-night-showers" title="Humidity"></span>
            {element.day.daily_chance_of_rain} %
          </div>
        </div>
        <div className="row">
          <div className="col-6 item-wrapper">
            <span className="wi wi-snowflake-cold" title="Humidity"></span>
            {element.day.daily_chance_of_snow} %
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default WeatherByDayTile;
