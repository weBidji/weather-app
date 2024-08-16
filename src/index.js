import "./style.css";
import { format, parse } from "date-fns";

let locationData;
let currentDate;
let localTime;

let temperature;
let forecast;

let humidity;
let windSpeed;
let feelsLike;

// fetch weather data
async function getData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=63de79d20d6e4501af8183353241608&q=${location}&days=5&aqi=no&alerts=no`
    );
    const data = await response.json();
    console.log(data);

    // location

    locationData = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    // date and time
    const timeInfo = data.location.localtime.split(" ");
    const date = parse(timeInfo[0], "yyyy-MM-dd", new Date());
    currentDate = format(date, "EEEE, MMMM do yyyy");
    localTime = timeInfo[1];
    // forecast

    forecast = data.current.condition.text;
    console.log(forecast);

    // temp
    temperature = data.current.temp_c.toFixed(0);
    console.log(temperature);

    /* RIght side */

    //Humidity, wind, feels like

    humidity = data.current.humidity;
    windSpeed = data.current.wind_kph;
    feelsLike = data.current.feelslike_c.toFixed(0);

    displayInfo();
  } catch (err) {
    console.log(err);
  }
}

const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  if (locationInput.value) {
    const trimmedLocation = locationInput.value.trim().toLowerCase();
    getData(trimmedLocation);
    locationInput.value = "";
  } else {
    console.log("please enter a location to search");
  }
});

function displayInfo() {
  const locationDisplay = document.getElementById("location");
  const dateInfo = document.getElementById("date-info");
  const timeInfo = document.getElementById("time-info");
  const tempBox = document.getElementById("temperature");
  const forecastInfo = document.getElementById("forecast-info");
  const humidityInfo = document.getElementById("humidity-info");
  const windInfo = document.getElementById("wind-info");
  const feelsLikeInfo = document.getElementById("feels-like-info");

  // left side
  locationDisplay.textContent = `${locationData}`;
  dateInfo.textContent = `${currentDate}`;
  timeInfo.textContent = `${localTime}`;
  tempBox.textContent = `${temperature}°C`;
  forecastInfo.textContent = `${forecast}`;
  // right side

  humidityInfo.textContent = `Humidity: ${humidity}%`;
  windInfo.textContent = `Wind: ${windSpeed} km/h`;
  feelsLikeInfo.textContent = `Feels like: ${feelsLike}°C`;
}

window.addEventListener("DOMContentLoaded", () => {
  getData("paris");
});

// refactor for good practice

// refine current info

// add 3-5 days forecast

// add imperial / metric converter

// display style