let now = new Date();
function formatDate(date) {
  let timeMessage = document.querySelector("p#time");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let currentHours = date.getHours();
  let currentMinute = now.getMinutes();
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  if (currentHours < 10) {
    currentHours = "0" + currentHours;
  }

  let currentDate = currentDay + " " + currentHours + ":" + currentMinute;
  timeMessage.textContent = currentDate;
}
formatDate(now);
//5
function displayTemp(response) {
    document.querySelector(".big_name").innerHTML=response.data.name;
    document.querySelector(".big_temp").innerHTML=Math.round(response.data.main.temp);
}

function search(city) {
let ApiKey="fca26df71aa7f76c937cd6c0ae00d95a";
let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
axios.get(ApiUrl).then(displayTemp);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#searchTown").value;
    searchCity(city);
}

search("Odesa");