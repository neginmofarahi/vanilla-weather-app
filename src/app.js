function displayTemp(response) {
  let strong = document.querySelector("strong");
  let temp = Math.round(response.data.main.temp);
  strong.innerHTML = temp;
}
let apiKey = "7d5433d322af5ac78f642274f8113911";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemp);
