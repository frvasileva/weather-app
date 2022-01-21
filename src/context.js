import React from "react";

// set the defaults
const WeatherContext = React.createContext({
  weatherType: "sunny",
  setWeatherType: () => {}
});

export default WeatherContext;
