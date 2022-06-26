// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// fb8fc2c12a41aff4c5e600ce15630ac7

const weatherApi={
    key:"fb8fc2c12a41aff4c5e600ce15630ac7",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
//event listener fn on keypress
const searchInputBox=document.getElementById("inputBox");

searchInputBox.addEventListener("keypress", (event) => {
    
    if(event.keyCode == 13){
        //console.log(searchInputBox.value);
        document.querySelector('.weatherBody').style.display="block";
        getWeather(searchInputBox.value);
    }
});


// get weather report

function getWeather(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeather);
}
// show weather report
function showWeather(weather){
    console.log(weather);
    let city=document.getElementById("city");
    city.innerText=`${weather.name}, ${weather.sys.country}`;
    let temp=document.getElementById("temp");
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C `;
    let minmax=document.getElementById("min-max");
    minmax.innerHTML=`Min: ${Math.floor(weather.main.temp_min)}&deg;C / Max: ${Math.ceil(weather.main.temp_max)}&deg;C `;
    let weatherType=document.getElementById("weather");
    weatherType.innerText=`${weather.weather[0].main}`;
    const current = new Date();

const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});
const timer=document.getElementById("time");
timer.innerText=`${time}`;
let date=document.getElementById("date");
let todayDate=new Date();
date.innerText=dateManage(todayDate);
if(weatherType.textContent=='Clear'){
    document.body.style.backgroundImage="url(daylight.jpg)"
    document.getElementById("b22").style.color="brown";
}
if(weatherType.textContent=='Mist'){
    document.body.style.backgroundImage="url(mist-background-27420-28137-hd-wallpapers.jpg)"
    document.getElementById("b22").style.color="brown";
}
if(weatherType.textContent=='Clouds'){
    document.body.style.backgroundImage="url(clearsky2.jpg)"
    document.getElementById("b22").style.color="midnightblue";
}
if(weatherType.textContent=='Rain'){
    document.body.style.backgroundImage="url(rain.jpg)"
    document.getElementById("b22").style.color="purple";
}
if(weatherType.textContent=='Haze'){
    document.body.style.backgroundImage="url(haze2.jpg)"
    document.getElementById("b22").style.color="black";
}
if(weatherType.textContent=='Sunny'){
    document.body.style.backgroundImage="url(sunny.jpg)"
    document.getElementById("b22").style.color="orange";
}
if(weatherType.textContent=='thunderstorm'){
    document.body.style.backgroundImage="url(thunderstorm.jpg)"
    document.getElementById("b22").style.color="violet";
}


}
//date manage
function dateManage(datearg){
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let year=datearg.getFullYear();
let month=months[datearg.getMonth()];

let day=days[datearg.getDay()];

let date=datearg.getDate();
return `${date} ${month} , ${year} (${day})`;

}


