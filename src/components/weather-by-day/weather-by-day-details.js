import React, { useState } from "react";
import WeatherByDayTile from "./weather-by-day-tile";

export const WeatherByDayDetails = (props) => {
  var element = props.element;
  const [isExpanded, setExpanded] = useState(false);
  const [isExpandedIcon, setExpandedIcon] = useState(
    "fas fa-chevron-circle-down"
  );
  var date = new Date(element.date);
  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };


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
          <span className="day-of-week">{date.toLocaleDateString("en-US", options)}</span>
        </div>
        <div className="col-md-2 col-2">
          <img
            src={element.day.condition.icon}
            alt={element.day.condition.text}
            className="small-icon"
          />
        </div>
        <div className="col-md-4 col-4">
          <span className="daily-temperatures">
            {element.day.mintemp_c.toFixed()} /{" "}
            {element.day.maxtemp_c.toFixed()} °C
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
          {" "}
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
