function displayTemp(response) {
  //let apiURL = function
  let strong = document.querySelector("strong");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let state = document.querySelector("#weather-state");
  strong.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = Math.round(response.data.main.humidity);
  wind.innerHTML = Math.round(response.data.wind.speed);
  state.innerHTML = response.data.weather.description;
}

function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let enteredCity = document.querySelector("#search-city");
  h1.innerHTML = enteredCity.value;
}

function showTime(Date) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  console.log(hour);
  let min = now.getMinutes();
  console.log(min);
  let htmlDay = document.querySelector("#day");
  let htmlHour = document.querySelector("#hour");
  let htmlMin = document.querySelector("#min");
  htmlDay.innerHTML = day;
  htmlHour.innerHTML = hour;
  htmlMin.innerHTML = min;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey = "7d5433d322af5ac78f642274f8113911";
//let city = document.querySelector("#search-city").value;
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${apiKey}&units=metric`;
console.log(apiURL);

axios.get(apiURL).then(displayTemp);

let now = new Date();
let time = document.querySelector("#time");
time.innerHTML = showTime(now);
