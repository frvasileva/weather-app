import { BrowserRouter } from "react-router-dom";

import whatTimeOfDayIs from "./helpers/whatTimeOfDayIs";
import SearchByLocation from "./components/search-location/search-by-location";

import "./App.scss";

function App() {
  var hour = whatTimeOfDayIs();
  var backgroundCssClass = "dawn";

  if (hour.isDay()) backgroundCssClass = "day";
  if (hour.isSusnetDusk()) backgroundCssClass = "sunset-dusk";
  if (hour.isNight()) backgroundCssClass = "night";
  backgroundCssClass = "wrapper " + backgroundCssClass;
  
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
