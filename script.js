// Declaring the variables
let lon;
let lat;



let temperature1 = document.querySelector(".temp1");
let summary1 = document.querySelector(".summary1");
let loc1 = document.querySelector(".location1");
let icon1 = document.querySelector(".icon1");
let temperature2 = document.querySelector(".temp2");
let summary2 = document.querySelector(".summary2");
let loc2 = document.querySelector(".location2");
let icon2 = document.querySelector(".icon2");
const kelvin = 273;

function srcloc() {
    // API Id
    const api = "e1d3fbcd57d923d8c54b6ff2297d8b33";

    // location
    const locationValue = document.getElementById('otherlocation').value;


    // API URL
    const base = 
    `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=${api}&units=metric`;

    // Calling the API
    fetch(base)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        temperature1.innerHTML = Math.floor(data.main.temp) + "°C";                
        summary1.textContent = data.weather[0].description;
        loc1.textContent = data.name + "," + data.sys.country;
        let weathericon1 = data.weather[0].icon;
        let url1 = `https://openweathermap.org/img/wn/${weathericon1}.png`;
        icon1.innerHTML = `<img src='${url1}' style='height:10rem'>`;

    })
}

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
                temperature2.innerHTML = Math.floor(data.main.temp - kelvin) + "°C";                
                summary2.textContent = data.weather[0].description;
                loc2.textContent = data.name + "," + data.sys.country;
                let weathericon2 = data.weather[0].icon;
                let url2 = `https://openweathermap.org/img/wn/${weathericon2}.png`;
                icon2.innerHTML = `<img src='${url2}' style='height:10rem'>`;
            });
        });
    }
}

window.addEventListener("load", geoloc);

let inputarea = document.getElementById('otherlocation');

inputarea.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchbutton").click();
    }
  });
