function displayTemp(response) {
  let strong = document.querySelector("strong");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let state = document.querySelector("#weather-state");
  strong.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = Math.round(response.data.main.humidity);
  wind.innerHTML = Math.round(response.data.wind.speed);
  state.innerHTML = response.data.weather[0].description;
}

function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let enteredCity = document.querySelector("#search-city");
  h1.innerHTML = enteredCity.value;
}

function showTime(Date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "June.",
    "July.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  let month = months[now.getMonth()];
  let day = days[now.getDay()];
  let date = now.getDate();
  let hour = now.getHours();
  let min = now.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  let dayElement = document.querySelector("#current-date");
  let timeElement = document.querySelector("#current-time");
  dayElement.innerHTML = `${day}, ${month} ${date}th`;
  timeElement.innerHTML = `${hour}:${min}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey = "7d5433d322af5ac78f642274f8113911";
let city = "paris";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiURL);

axios.get(apiURL).then(displayTemp);

let now = new Date();
showTime(now);
