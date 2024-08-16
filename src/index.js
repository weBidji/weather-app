import "./style.css";
import { format, parse } from "date-fns";

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

async function displayInfo() {
  const data = await getData(location);

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
  const currentIcon = document.createElement("img");

  currentImageDiv.appendChild(currentIcon);
  // right side

  humidityInfo.textContent = `Humidity: ${data.current.humidity}%`;
  windInfo.textContent = `Wind: ${data.current.wind_kph} km/h`;
  feelsLikeInfo.textContent = `Feels like: ${data.current.feelslike_c.toFixed()}°C`;
}

const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  if (locationInput.value) {
    const trimmedLocation = locationInput.value.trim().toLowerCase();
    getData(trimmedLocation);
    locationInput.value = "";
    createDayObjects();
    displayDays();
  } else {
    console.log("please enter a location to search");
  }
});

class DayInfo {
  constructor(weekday, hightemp, lowtemp, forecastinfo) {
    (this.weekday = weekday),
      (this.hightemp = hightemp),
      (this.lowtemp = lowtemp),
      (this.forecastinfo = forecastinfo);
  }
}

async function createDayObjects() {
  const weatherInfo = await getData(location);

  const days = [];
  for (let i = 0; i < 3; i++) {
    const day = new DayInfo(
      weatherInfo.forecast.forecastday[i].date,
      weatherInfo.forecast.forecastday[i].day.maxtemp_c.toFixed(0),
      weatherInfo.forecast.forecastday[i].day.mintemp_c.toFixed(0),
      weatherInfo.forecast.forecastday[i].day.condition.text
    );
    days.push(day);
  }

  return days;
}

async function displayDays() {
  const daysToDisplay = await createDayObjects();
  const futureForecast = document.getElementById("future-forecast");
  futureForecast.innerHTML = "";

  daysToDisplay.forEach((day) => {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day-box");

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

    dayBox.appendChild(dayName);
    dayBox.appendChild(highTemp);
    dayBox.appendChild(lowTemp);
    dayBox.appendChild(forecast);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  getData("paris");
  displayInfo();
  createDayObjects();
  displayDays();
});

// refactor for good practice

// refine current info

// add 3-5 days forecast

// add imperial / metric converter

// display style
