function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  if (searchInput.value.length) {
    let city = document.querySelector("#city-name");
    city.innerHTML = searchInput.value;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=c5c1992383057589b3e373582566187c&units=metric`;
  axios.get(url).then(convertToCelsius);
}

function convertToCelsius(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  let link = document.querySelector("#celsius");
  link.classList.add("active");
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.remove("active");
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round((23 * 9) / 5 + 32);

  let link = document.querySelector("#fahrenheit");
  link.classList.add("active");
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.remove("active");
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let dateDay = document.querySelector("#current-day");
let dateTime = document.querySelector("#current-time");

let currentTime = new Date();
let date = currentTime.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[currentTime.getMonth()];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[currentTime.getDay()];

dateDay.innerHTML = day + ", " + date + " " + month;

let hours = currentTime.getHours();
let minuties = currentTime.getMinutes();
dateTime.innerHTML = hours + ":" + minuties;
