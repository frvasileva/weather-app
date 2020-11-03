import React, { useState } from "react";
import WeatherByHours from "./weather-by-hours";

import "./weather-by-day.scss";

export const WeatherByDayDetails = (props) => {
  var element = props.element;
  const [isExpanded, setExpanded] = useState(false);
  const [isExpandedIcon, setExpandedIcon] = useState(
    "fas fa-chevron-circle-down"
  );

  const togglePanel = () => {
    setExpanded(!isExpanded);
    if (isExpanded) {
      setExpandedIcon("fas fa-chevron-circle-down");
    } else {
      setExpandedIcon("fas fa-chevron-circle-up");
    }
  };

  return (
    <div>
      <div className="row weather-by-day-row" onClick={togglePanel}>
        <div className="col-2 col-sm-4">
          <span className="day-of-week">{element.date}</span>
        </div>
        <div className="col-3 col-sm-2">
          <img
            src={element.day.condition.icon}
            alt={element.day.condition.text}
            className="small-icon"
          />
        </div>
        <div className="col-6 col-sm-3">
          <span className="daily-temperatures">
            {element.day.mintemp_c} / {element.day.maxtemp_c} °C
          </span>
        </div>
        <div className="col-1 col-sm-3">
          <div className="expander-wrapper">
            <i className={isExpandedIcon}></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <WeatherByHours
            isExpanded={isExpanded}
            element={element}
            className="weather-by-hours"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherByDayDetails;
