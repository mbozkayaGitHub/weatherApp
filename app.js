// const apiKey ="08124597654215b2993aeaeba86aa177";
// const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city){
//   const response = await fetch(apiUrl + city `&appid=${apiKey}`);
//   var data = await response.json();
//   console.log(data);

//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";  // after this step check the we page-You will see the city and temp...
// }
//   searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
//   })