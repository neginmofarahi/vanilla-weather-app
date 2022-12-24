function displayTemp(response) {
  let strong = document.querySelector("strong");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  strong.innerHTML = Math.round(response.data.main.temp);
  console.log(response.data.main.humidity);
  humidity.innerHTML = Math.round(response.data.main.humidity);
  wind.innerHTML = Math.round(response.data.wind.speed);
}

/*function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let enteredCity = document.querySelector("#search-city");
  h1.innerHTML = enteredCity.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);*/

let apiKey = "7d5433d322af5ac78f642274f8113911";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${apiKey}&units=metric`;
console.log(apiURL);

axios.get(apiURL).then(displayTemp);
