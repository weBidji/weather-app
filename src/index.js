import "./style.css";
import { format, parse } from "date-fns";
import { weatherGroups } from "./weathericons";

export async function getData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=63de79d20d6e4501af8183353241608&q=${location}&days=5&aqi=no&alerts=no`
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    errorMessage("Error retrieving data.");
    showPoutyFace();
  }
}

async function displayInfo(location) {
  const data = await getData(location);
  console.log(data);

  if (data && data.location) {
    const locationDisplay = document.getElementById("location");
    const dateInfo = document.getElementById("date-info");
    const timeInfo = document.getElementById("time-info");
    const tempBox = document.getElementById("temperature");
    const forecastInfo = document.getElementById("forecast-info");
    const humidityInfo = document.getElementById("humidity-info");
    const windInfo = document.getElementById("wind-info");
    const feelsLikeInfo = document.getElementById("feels-like-info");

    // left side
    locationDisplay.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;

    const localDate = data.location.localtime.split(" ");
    const date = parse(localDate[0], "yyyy-MM-dd", new Date());

    const today = format(date, "EEEE, MMMM do y");
    dateInfo.textContent = `${today}`;
    timeInfo.textContent = `${localDate[1]}`;
    tempBox.textContent = `${data.current.temp_c.toFixed(0)}°C`;
    forecastInfo.textContent = `${data.current.condition.text}`;

    const currentImageDiv = document.getElementById("current-conditions-img");

    currentImageDiv.innerHTML = getWeatherIcon(
      data.current.condition.code,
      data.current.is_day
    );

    humidityInfo.innerHTML = `<span class="secondary">Humidity</span> <span class="main-info">${data.current.humidity}%</span>`;
    windInfo.innerHTML = `<span class="secondary">Wind speed</span> <span class="main-info">${data.current.wind_kph} km/h</span>`;
    feelsLikeInfo.innerHTML = `<span class="secondary">Feels like</span> <span class="main-info">${data.current.feelslike_c.toFixed()}°C</span>`;

    const errorMessage = document.getElementById("error-message");
    errorMessage.classList.remove("show");
    errorMessage.classList.add("hide");
  } else {
    console.error("Failed to load data");
    console.log("lol");
    errorMessage("No matching location found.");
    // showPoutyFace();
  }
}

// location search

const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");

function handleSearch() {
  if (locationInput.value) {
    const trimmedLocation = locationInput.value.trim().toLowerCase();
    displayInfo(trimmedLocation);
    displayDays(trimmedLocation);
    locationInput.value = "";
  } else {
    console.log("Please enter a location to search");
  }
}

searchBtn.addEventListener("click", handleSearch);

locationInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});

// forecast objects creation and display

class DayInfo {
  constructor(weekday, hightemp, lowtemp, forecastinfo, isday, code) {
    this.weekday = weekday;
    this.hightemp = hightemp;
    this.lowtemp = lowtemp;
    this.forecastinfo = forecastinfo;
    this.isday = isday;
    this.code = code;
  }
}

async function createDayObjects(location) {
  const weatherInfo = await getData(location);

  if (weatherInfo) {
    const days = [];
    for (let i = 0; i < 5; i++) {
      const day = new DayInfo(
        weatherInfo.forecast.forecastday[i].date,
        weatherInfo.forecast.forecastday[i].day.maxtemp_c.toFixed(0),
        weatherInfo.forecast.forecastday[i].day.mintemp_c.toFixed(0),
        weatherInfo.forecast.forecastday[i].day.condition.text,
        1,
        weatherInfo.forecast.forecastday[i].day.condition.code
      );
      days.push(day);
    }
    return days;
  } else {
    console.error("Failed to load weather info");
  }
}

async function displayDays(location) {
  const daysToDisplay = await createDayObjects(location);
  if (daysToDisplay) {
    const forecast = document.getElementById("forecast");
    forecast.innerHTML = "";

    daysToDisplay.forEach((day) => {
      const dayBox = document.createElement("div");
      dayBox.classList.add("day-box");

      const dayIcon = document.createElement("div");
      dayIcon.classList.add("day-icon");
      dayIcon.innerHTML = getWeatherIcon(day.code, day.isday);

      const dayName = document.createElement("p");
      dayName.classList.add("day-name");

      const date = parse(day.weekday, "yyyy-MM-dd", new Date());
      const dayOfTheWeek = format(date, "EEEE");

      dayName.textContent = dayOfTheWeek;

      const highTemp = document.createElement("p");
      highTemp.classList.add("day-high-temp");
      highTemp.textContent = `${day.hightemp}°C`;

      const lowTemp = document.createElement("p");
      lowTemp.classList.add("day-low-temp");
      lowTemp.textContent = `${day.lowtemp}°C`;

      forecast.appendChild(dayBox);
      dayBox.appendChild(dayName);
      dayBox.appendChild(dayIcon);
      dayBox.appendChild(highTemp);
      dayBox.appendChild(lowTemp);
    });
  } else {
    return;
  }
}

// icon fetching

function getWeatherIcon(code, isDay) {
  let icon;

  for (const group in weatherGroups) {
    if (weatherGroups[group].codes.includes(code)) {
      icon =
        isDay === 1 ? weatherGroups[group].day : weatherGroups[group].night;
    }
  }

  return icon;
}

// onload

window.addEventListener("DOMContentLoaded", () => {
  const defaultLocation = "london";
  displayInfo(defaultLocation);
  displayDays(defaultLocation);
});

function errorMessage(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hide");
  errorMessage.classList.add("show");
}

// handle error cases ->  "unable to fetch data or location unknown";
// add spinner?
function showPoutyFace() {
  const forecast = document.getElementById("forecast");
  forecast.innerHTML = "";
  const errorBox = document.createElement("div");
  errorBox.id = "error-box";
  errorBox.textContent = ":(";
  forecast.appendChild(errorBox);
}
