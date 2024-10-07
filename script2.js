const weatherContainer = document.getElementById("weather-div");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const tempElement = document.getElementById("temp-value"); // Target the temperature element
const apikey = "8ed64ac73060ac2cb1a0ca062a998374"; // Your API key

function displayWeather() {
    const city = searchInput.value;
    console.log("clicked");
    console.log(city);
    if(typeof city!== "string"){
        tempElement.innerHTML="City name must be string only";
        return "City name must be string only";
    }
    weatherContainer.style.display = "block"; // Make the weather div visible

    // API request URL
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    // Fetching weather data
    fetch(api)
        .then((response) => response.json()) // Convert the response to JSON
        .then((data) => {
            console.log(data);
            console.log(data.main.temp); // Log temperature to the console
            
            // Updating the temperature in the HTML
            tempElement.innerHTML = `${data.main.temp}°C`; // Update the temp in the page
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            tempElement.innerHTML = "Error fetching data"; // Display error message in case of failure
        });
}

// Add event listener to trigger the function when the button is clicked
searchBtn.addEventListener("click", displayWeather);
searchInput.addEventListener("keyup", function (event) {
    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        searchBtn.click();
    }
});
