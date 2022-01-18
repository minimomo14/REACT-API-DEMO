import React from 'react';
import './App.css';
import Quote from './components/Quote';
import RedditAww from './components/Reddit-aww';
import WeatherForecast from './components/WeatherForecast';
import WeatherMap from './components/WeatherMap';

function App() {
  return (
    <div className="App">
      <WeatherMap />
      <RedditAww />
      <WeatherForecast />
      <Quote />
    </div>
  );
}

export default App;
