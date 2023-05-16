let latitude = 0 //create variable for latitude
let longitude = 0 //create variable for latitude
//915ece8a2a57e9341116d7f79f739833


window.onload = function() { // window loads whole pagecan set a variable to a function, anonymous function -> doen't need to be called 
    const date = new Date();
    //should output date m/d/y 
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() +      '/' + date.getFullYear(); //JS has premade date object, keeping time (months are 0-13 indexed)
    // Now, set the .date HTML text to our dateString
    document.getElementById('date').innerHTML = dateString // modifying HTML w JS, using innerHTML displays tags, textContent regular text
}
if ("geolocation" in navigator) { //if the browser supports location
    navigator.geolocation.getCurrentPosition(success) // we'll get position, calls sucess function if successful-> need to define our own sucess funct

} else { //if location does not exist, if we deny location
  console.log("Geolocation is not available in your browser.");
}

function success(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	// Print out the latitude and longitude to see if it works!
}
//Write the code that sets const btn to our #getWeatherBtn ID
const btn = document.getElementById('getWeatherBtn'); 
// Add an event listener to btn
btn.addEventListener("click", () => {
  //Inside the btn.addEventListener, add this template:
  //------------------CURRENT WESTHER FORECAST--------------------------------------------------------
  
  const xhr = new XMLHttpRequest(); //defines XML object
  xhr.open("GET", `http://localhost:3000/weather/${latitude}/${longitude}`); // this opens a get request for webiste
  xhr.send(); //this sends request "executes"
  xhr.onload = function() {
  
   const body = JSON.parse(xhr.responseText)//Whatâ€™s wrong w/ this (Think about the format responseText is in and what format we need it in (stringify/parse)

   let temp = body.temperature
   let weatherStatus = body.weatherStatus
   document.getElementById("temperature").innerHTML = `Temperature: ${temp}°F`; //setting html variables to variables that we get
   document.getElementById("weatherStatus").innerHTML = `Weather Status: ${weatherStatus}`;
  }
  //----------------FORECAST fiveday forecast data (xhr2)-------------------------------------------------
  const xhr2 = new XMLHttpRequest();
  xhr2.open("GET", `http://localhost:3000/5day/${latitude}/${longitude}`);
  xhr2.send();
  xhr2.onload = function() {
	const body = JSON.parse(xhr2.responseText);
	let forecast = body;
  let forecastElements = document.getElementsByClassName("forecast");
	for (let i = 0; i < forecast.length; i++) {
    forecastElements[i].innerHTML = forecast[i].dayName + ": " + forecast[i].temp + "\u00B0F";
  }
}
});
