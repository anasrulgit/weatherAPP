const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

const apiKey = "f6ced61f68c96238a45b8998b909ef0e";

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${jakarta}&units=metric&appid=${f6ced61f68c96238a45b8998b909ef0e}`
    );
    if (!response.ok) {
      alert("City not found");
      return;
    }
    const data = await response.json();
    updateWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function updateWeather(data) {
  const { name, main, weather, wind } = data;
  cityElement.textContent = name;
  tempElement.innerHTML = `${Math.round(
    main.temp
  )}°<span class="superscript">C</span>`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  humidityElement.textContent = `${main.humidity}%`;
  windElement.textContent = `${Math.round(wind.speed)} km/h`;
}

searchButton.addEventListener("click", () => {
  const city = searchInput.value;
  if (city) {
    fetchWeather(city);
  }
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const city = searchInput.value;
    if (city) {
      fetchWeather(city);
    }
  }
});
