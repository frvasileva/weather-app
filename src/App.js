import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import SearchByLocation from "./components/search-location/search-by-location";
import "./App.scss";
import "./weatherCondition.scss";
import WeatherContext from "./context";

function App() {
  
  const [weatherType, setWeatherType] = useState("sunny");
  const value = { weatherType, setWeatherType };
  var backgroundCssClass = "wrapper " + weatherType;

  return (
    <BrowserRouter>
      <WeatherContext.Provider value={value}>
        <div className={backgroundCssClass}>
          <header className="App-header"></header>
          <div className="container">
            <div className="app-wrapper">
              <div className="row">
                <div className="col">
                  <SearchByLocation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WeatherContext.Provider>
    </BrowserRouter>
  );
}

export default App;
