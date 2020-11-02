import { BrowserRouter } from "react-router-dom";

import SearchByLocation from "./components/search-location/search-by-location";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper day">
        <header className="App-header"></header>
        <div className="container">
          <div className="row">
            <div className="col">
              <SearchByLocation />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
