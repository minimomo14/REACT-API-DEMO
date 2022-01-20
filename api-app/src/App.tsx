import React from "react";
import "./App.css";
import Quote from "./components/Quote";
import RedditAww from "./components/Reddit-aww";
import WeatherForecast from "./components/WeatherForecast";
import WeatherMap from "./components/WeatherMap";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import QuoteDetail from "./components/QuoteDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>APIs</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/weather-map">Weather Map</Link>
            </li>

            <li>
              <Link to="/weather-forecast">Weather Forecast</Link>
            </li>

            <li>
              <Link to="/reddit-aww">Reddit-Aww</Link>
            </li>

            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/weather-map" element={<WeatherMap />}></Route>
          <Route path="/weather-forecast" element={<WeatherForecast />}></Route>
          <Route path="/reddit-aww" element={<RedditAww />}></Route>
          <Route path="/quotes" element={<Quote />}></Route>
          <Route path="/quotes/:id" element={<QuoteDetail />}></Route>
          <Route path="*" element={<Navigate to="/quotes" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
