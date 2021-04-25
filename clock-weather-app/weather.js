const weatherTemperature = document.querySelector(".weather_temperature"),
  weatherMain = document.querySelector(".weather_main"),
  weatherTemps = document.querySelector(".weather_temps"),
  weatherOthers = document.querySelector(".weather_others"),
  weatherLocation = document.querySelector(".weather_location");

const key = "351d5e96c2167ecb571357e8e67eaf73";

function drawWeather(weather) {
    console.log(weather);
    weatherLocation.innerHTML = `${weather.location}`;
  weatherTemperature.innerHTML = `${weather.temp} °C`;
  weatherMain.innerHTML = `${weather.main}`;
  weatherTemps.innerHTML = `<span>Feels:</span> ${weather.tempFeel} °C &nbsp;&nbsp;
    <span>Min:</span> ${weather.tempMin} °C &nbsp;&nbsp;
    <span>Max:</span> ${weather.tempMax} °C`;
  if (weather.rain) {
    weatherOthers.innerHTML = `<span>Humidity:</span> ${weather.hum} % &nbsp;&nbsp;
    <span>Rain:</span> ${weather.rain} mm/h &nbsp;&nbsp;
    <span>Wind:</span> ${weather.wind} m/s`;
  } else {
    weatherOthers.innerHTML = `<span>Humidity:</span> ${weather.hum} % &nbsp;&nbsp;
    <span>Wind:</span> ${weather.wind} m/s`;
  }
}

const getWeatherData = async (lat, lon) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );
  const weatherData = await data.json();
  const ABS_ZERO = 273.15;
  console.log(weatherData);
  
  const weather = {
    temp: (weatherData.main.temp - ABS_ZERO).toFixed(2),
    tempFeel: (weatherData.main.feels_like - ABS_ZERO).toFixed(2),
    tempMin: (weatherData.main.temp_min - ABS_ZERO).toFixed(2),
    tempMax: (weatherData.main.temp_max - ABS_ZERO).toFixed(2),
    hum: weatherData.main.humidity,
    main: weatherData.weather[0].main,
    wind: weatherData.wind.speed,
    id: weatherData.weather[0].id, // 나중에 아이콘 사용하기 위한 용도
    rain: weatherData.rain ? weatherData.rain["1h"] : null,
    location: weatherData.name,
  };

  drawWeather(weather);
};

const handleError = () => {
  console.log("Failed to get current position");
};

const handleSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
  getWeatherData(latitude, longitude);
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
};

getLocation();