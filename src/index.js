import "./style.css";
let temperature;
let description;
let currentLocation;

async function getTemp(location) {
  currentLocation = location;
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=7FNLWYQA3L2SBVYWBT882KRJV&contentType=json`
    );
    const data = await response.json();
    console.log(data);
    description = data.description;
    temperature = data.currentConditions.temp;
    console.log(`Current temperature in ${location}: ${temperature}°C.`);
    console.log(description);
    displayInfo();
  } catch (err) {
    console.log("location fetching failed");
  }
}

const locationInput = document.getElementById("location-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  if (locationInput.value) {
    getTemp(locationInput.value.trim().toLowerCase());
    locationInput.value = "";
  } else {
    console.log("please enter a location to search");
  }
});

function displayInfo() {
  const tempBox = document.getElementById("temperature");
  const forecast = document.getElementById("forecast");

  tempBox.textContent = `Current temperature in ${currentLocation}: ${temperature}°C`;
  forecast.textContent = `${description}`;
}
