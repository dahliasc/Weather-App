let latitude = 0 //create variable for latitude
let longitude = 0 //create variable for latitude

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
    let forecast = [["M", 52], ["Tu", 53], ["W", 54], ["Th", 55], ["F", 56]]; //nested array of day: forecast pairs
    let forecastElements = document.getElementsByClassName("forecast"); //setting forecast elements to an array of divs with the class of 'forecast'
    for (let i = 0; i < forecast.length; i++) { // For loop goes through 0th index to the lenghth
        forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "\u00B0F"; // adding corresponding i'th forecast div element to HTML in the format of "Day: Temp F"
      }
});