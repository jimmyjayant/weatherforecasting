// Declaring the variables
let lon;
let lat;

let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

function geoloc() 
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((showPosition) => 
        {
            console.log(showPosition);
            lon = showPosition.coords.longitude;
            lat = showPosition.coords.latitude;

            // API Id
            const api = "e1d3fbcd57d923d8c54b6ff2297d8b33";

            // API URL
            const base = 
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&` + 
            `appid=${api}`;

            // Calling the API
            fetch(base)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                temperature.innerHTML = Math.floor(data.main.temp - kelvin) + "°C";                
                summary.textContent = data.weather[0].description;
                loc.textContent = data.name + "," + data.sys.country;
                let icon1 = data.weather[0].icon;
                let url = `https://openweathermap.org/img/wn/${icon1}.png`;
                icon.innerHTML = `<img src='${url}' style='height:10rem'>`;
            });
        });
    }
}

window.addEventListener("load", geoloc);
