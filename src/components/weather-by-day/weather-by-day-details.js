import React, { useState } from "react";
import WeatherByDayTile from "./weather-by-day-tile";

import "./weather-by-day.scss";

export const WeatherByDayDetails = (props) => {
  var element = props.element;

  console.log("element ", element.hour);

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
        <div className="col-md-4 col-4">
          <span className="day-of-week">{element.date}</span>
        </div>
        <div className="col-md-2 col-1">
          <img
            src={element.day.condition.icon}
            alt={element.day.condition.text}
            className="small-icon"
          />
        </div>
        <div className="col-md-4 col-4">
          <span className="daily-temperatures">
            {element.day.mintemp_c} / {element.day.maxtemp_c} °C
          </span>
        </div>
        <div className="col-md-1 col-2">
          <div className="expander-wrapper">
            <i className={isExpandedIcon}></i>
          </div>
        </div>
      </div>
      <div className={isExpanded ? "row expanded-row" : "row"}>
        <div className="col-md">
          <WeatherByDayTile
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
