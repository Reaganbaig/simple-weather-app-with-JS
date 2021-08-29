const getWeatherData = () => {
  const getCityName = document.getElementById("getCityName");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCityName.value}&appid=8b4fe78d8235770375cc427e281f297f`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => weatherObject(data));

  /* Temperature convert kelvin to celsius
  --------------------------------------- */
  const toCelsius = (kelvinTemp) => kelvinTemp - 273.15;

  /* Get object of weather
  ------------------------------ */
  const weatherObject = (object) => {
    const showTemp = document.getElementById("temperature");
    const cityName = document.getElementById("cityName");
    const country = document.getElementById("countryName");
    const icon = document.getElementById("weatherIcon");
    const description = document.getElementById("description");
    // Temperature Update
    const tempCelsius = toCelsius(object.main.temp);
    const toInteger = Math.round(tempCelsius);
    showTemp.innerText = toInteger;
    // City Name Update
    cityName.innerText = `${object.name}`;
    // Country Update
    country.innerText = `${object.sys.country}`;
    // Icon Update
    if (toInteger <= 20) {
      icon.setAttribute("src", "images/cool.png");
    } else if (toInteger <= 25 && toInteger > 20) {
      icon.setAttribute("src", "images/cloudy.png");
    } else if (toInteger > 25) {
      icon.setAttribute("src", "images/hot.png");
    }
    // Description Update
    const describe = `${object.weather[0].description}`;
    description.innerText = describe;
  };
};
