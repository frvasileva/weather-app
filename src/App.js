import "./App.scss";

import SearchByLocation from "./components/search-location/search-by-location";

function App() {
  return (
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
  );
}

export default App;
