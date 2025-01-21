import React from "react";

function Weather() {
  // Placeholder for weather data
  const weatherData = {
    location: "New York City",
    temperature: "25°C",
    description: "Sunny",
    humidity: "50%",
    wind: "15 km/h",
  };

  return (
    <div className="weather-container">
      <h1 className="weather-heading">Weather Page</h1>
      <div className="weather-card">
        <h2>{weatherData.location}</h2>
        <p>Temperature: {weatherData.temperature}</p>
        <p>Description: {weatherData.description}</p>
        <p>Humidity: {weatherData.humidity}</p>
        <p>Wind: {weatherData.wind}</p>
      </div>
    </div>
  );
}

export default Weather;

/*
function Weather() {
  return <h1>Weather Page</h1>;
  
}
export default Weather;
*/

/*
import React, { Component, useEffect, useState } from "react";
import "../App.css";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

*/
