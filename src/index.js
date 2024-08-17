import "./style.css";
import { format, parse } from "date-fns";
import { weatherGroups } from "./weathericons";

async function getData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=63de79d20d6e4501af8183353241608&q=${location}&days=5&aqi=no&alerts=no`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function displayInfo(location) {
  const data = await getData(location);

  if (data) {
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

    // center
    const currentImageDiv = document.getElementById("current-conditions-img");

    currentImageDiv.innerHTML = getWeatherIcon(
      data.current.condition.code,
      data.current.is_day
    );

    // right side
    humidityInfo.textContent = `Humidity: ${data.current.humidity}%`;
    windInfo.textContent = `Wind: ${data.current.wind_kph} km/h`;
    feelsLikeInfo.textContent = `Feels like: ${data.current.feelslike_c.toFixed()}°C`;
  } else {
    console.error("Failed to load data");
  }
}

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
    for (let i = 0; i < 3; i++) {
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
    return [];
  }
}

async function displayDays(location) {
  const daysToDisplay = await createDayObjects(location);
  const futureForecast = document.getElementById("future-forecast");
  futureForecast.innerHTML = "";

  daysToDisplay.forEach((day) => {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day-box");

    const dayIcon = document.createElement("div");
    dayIcon.innerHTML = getWeatherIcon(day.code, day.isday);

    const dayName = document.createElement("p");
    dayName.classList.add("day-name");

    const date = parse(day.weekday, "yyyy-MM-dd", new Date());
    const dayOfTheWeek = format(date, "EEEE");

    dayName.textContent = dayOfTheWeek;

    const highTemp = document.createElement("p");
    highTemp.classList.add("day-high-temp");
    highTemp.textContent = `High: ${day.hightemp}°C`;

    const lowTemp = document.createElement("p");
    lowTemp.classList.add("day-low-temp");
    lowTemp.textContent = `Low: ${day.lowtemp}°C`;

    const forecast = document.createElement("div");
    forecast.classList.add("day-forecast");
    forecast.textContent = day.forecastinfo;

    futureForecast.appendChild(dayBox);
    dayBox.appendChild(dayIcon);
    dayBox.appendChild(dayName);
    dayBox.appendChild(highTemp);
    dayBox.appendChild(lowTemp);
    dayBox.appendChild(forecast);
  });
}

const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  if (locationInput.value) {
    const trimmedLocation = locationInput.value.trim().toLowerCase();
    displayInfo(trimmedLocation);
    displayDays(trimmedLocation);
    locationInput.value = "";
  } else {
    console.log("Please enter a location to search");
  }
});

// icons

function getWeatherIcon(code, isDay) {
  let icon = "default.png"; // Fallback icon

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
  const defaultLocation = "paris";
  displayInfo(defaultLocation);
  displayDays(defaultLocation);
});
