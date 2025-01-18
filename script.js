const currentdateandtime = document.getElementsByClassName("currentdatetime")[0];

setInterval(function() {
    currentdateandtime.innerHTML = new Date();
}, 1000);

function weatherdescription(x, y)
{
    // x = video element variable
    // y = weather description 
    if(y)
    {
        switch(y)
        {
            case 'haze':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/haze.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/haze.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/haze.mp4";
                        break;
    
                    case (window.innerWidth <= 1920):
                        x.src = "Videos/1k/haze.mp4";
                        break;
    
                    case (window.innerWidth <= 2560):
                        x.src = "Videos/2k/haze.mp4";
                        break;
    
                    case (window.innerWidth > 2560):
                        x.src = "Videos/4k/haze.mp4";
                        break;
                }
                break;
    
            case 'clear sky':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/clear sky1.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/clear sky1.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/clear sky1.mp4";
                        break;
    
                    case (window.innerWidth > 1280):
                        x.src = "Videos/1k/clear sky1.mp4";
                        break;
                }
                break;
    
            case 'few clouds':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/cloudy.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/cloudy.mp4";
                        break;
    
                    case (window.innerWidth > 800):
                        x.src = "Videos/1280/cloudy.mp4";
                        break;
                }
                break;
    
            case 'scattered clouds':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/scattered clouds.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/scattered clouds.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/scattered clouds.mp4";
                        break;
    
                    case (window.innerWidth > 1280):
                        x.src = "Videos/1k/scattered clouds.mp4";
                        break;
                }
                break;
    
            case 'broken clouds':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/broken clouds.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/broken clouds.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/broken clouds.mp4";
                        break;
    
                    case (window.innerWidth > 1280):
                        x.src = "Videos/1k/broken clouds.mp4";
                        break;
                }
                break;
            
            case 'shower rain':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/shower rain.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/shower rain.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/shower rain.mp4";
                        break;
    
                    case (window.innerWidth <= 1920):
                        x.src = "Videos/1k/shower rain.mp4";
                        break;
    
                    case (window.innerWidth <= 2560):
                        x.src = "Videos/2k/shower rain.mp4";
                        break;
    
                    case (window.innerWidth > 2560):
                        x.src = "Videos/4k/shower rain.mp4";
                        break;
                }
                break;
    
            case 'rain':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/rainy.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/rainy.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/rainy.mp4";
                        break;
    
                    case (window.innerWidth <= 1920):
                        x.src = "Videos/1k/rainy.mp4";
                        break;
    
                    case (window.innerWidth <= 2560):
                        x.src = "Videos/2k/rainy.mp4";
                        break;
    
                    case (window.innerWidth > 2560):
                        x.src = "Videos/4k/rainy.mp4";
                        break;
                }
                break;
    
            case 'thunderstorm':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/storm.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/storm.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/storm.mp4";
                        break;
    
                    case (window.innerWidth > 1280):
                        x.src = "Videos/1k/storm.mp4";
                        break;
                }
                break;
    
            case 'snow':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/winter.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/winter.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/winter.mp4";
                        break;
    
                    case (window.innerWidth > 1280):
                        x.src = "Videos/1k/winter.mp4";
                        break;
                }
                break;
    
            case 'mist':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/fog1.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/fog1.mp4";
                        break;
    
                    case (window.innerWidth <= 1280):
                        x.src = "Videos/1280/fog1.mp4";
                        break;
    
                    case (window.innerWidth > 1280):
                        x.src = "Videos/1k/fog1.mp4";
                        break;
                }
                break;
    
            case 'fog':
                switch(true)
                {
                    case (window.innerWidth <= 600):
                        x.src = "Videos/600/fog.mp4";
                        break;
    
                    case (window.innerWidth <= 800):
                        x.src = "Videos/800/fog.mp4";
                        break;
    
                    case (window.innerWidth > 800):
                        x.src = "Videos/1280/fog.mp4";
                        break;
                }
                break;

            default:
                break;
        }
    }
}

// Declaring the variables
let lon;
let lat;

let infodiv1 = document.getElementsByClassName("info1")[0];
let infodiv2 = document.getElementsByClassName("info2")[0];
let searchlocationvideo = document.getElementById("searchlocationvideo");
let currentlocationvideo = document.getElementById("currentlocationvideo");
let searchedlocationdatatable = document.getElementById("searchlocdata");
let currentlocationdatatable = document.getElementById("currentlocdata");
let curloctablecol = currentlocationdatatable.getElementsByTagName("tr");
let searchloctablecol = searchedlocationdatatable.getElementsByTagName("tr");
let errordiv1 = document.getElementsByClassName("error")[0];
let errordiv2 = document.getElementsByClassName("error")[1];
let rgba = document.getElementsByClassName("rgba");
let temperature1 = document.querySelector(".temp1");
let summary1 = document.querySelector(".summary1");
let loc1 = document.querySelector(".location1");
let icon1 = document.querySelector(".icon1");
let temperature2 = document.querySelector(".temp2");
let summary2 = document.querySelector(".summary2");
let loc2 = document.querySelector(".location2");
let icon2 = document.querySelector(".icon2");
const kelvin = 273;

// API Id
const api = "e1d3fbcd57d923d8c54b6ff2297d8b33";

function fetchandshowweatherdata(base, infodiv, temperature, summary, rgba, videoelement, location, icon, datatable, moreinfotablecols)
{
    // Calling the API
    fetch(base)
    .then((response) => {
        if(!response.ok) {
            throw "City Not Found!";
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if(data)
        {
            infodiv.style.display = "flex";

            temperature.innerHTML = Math.floor(data.main.temp) + "°C";
                            
            summary.textContent = data.weather[0].description;
            rgba.style.display = "block";
            videoelement.style.display = "block";
            videoelement.style.objectFit = "fill";
    
            weatherdescription(videoelement, data.weather[0].description);
    
            location.textContent = data.name + ", " + data.sys.country;
            let weathericon1 = data.weather[0].icon;
            let url1 = `https://openweathermap.org/img/wn/${weathericon1}.png`;
            icon.innerHTML = `<img src='${url1}' style='width:clamp(2rem, 2rem + 2vw, 4.5rem);height:clamp(2rem, 2rem + 2vw, 4.5rem);'>`;
            datatable.style.display = "block";

            moreinfotablecols[0].childNodes[3].textContent = data.name;
            moreinfotablecols[1].childNodes[3].textContent = data.sys.country;
            moreinfotablecols[2].childNodes[3].textContent = data.weather[0].main;

            moreinfotablecols[3].childNodes[3].textContent = Math.floor(data.main.temp) + "°C";
            
            moreinfotablecols[4].childNodes[3].textContent = data.main.pressure + " mb";
            moreinfotablecols[5].childNodes[3].textContent = data.main.humidity + " %";
            moreinfotablecols[6].childNodes[3].textContent = data.coord.lon;
            moreinfotablecols[7].childNodes[3].textContent = data.coord.lat;
            moreinfotablecols[8].childNodes[3].textContent = data.wind.speed + " km/h";
            moreinfotablecols[9].childNodes[3].textContent = data.wind.deg + " Deg";

            moreinfotablecols[10].childNodes[3].textContent = Math.floor(data.main.feels_like) + "°C";
            moreinfotablecols[11].childNodes[3].textContent = Math.floor(data.main.temp_min) + "°C";
            moreinfotablecols[12].childNodes[3].textContent = Math.floor(data.main.temp_max) + "°C";

            moreinfotablecols[13].childNodes[3].textContent = data.main.sea_level + " m";
            moreinfotablecols[14].childNodes[3].textContent = data.main.grnd_level + " m";
            let sunrisetimehours = new Date(data.sys.sunrise).getHours();
            let sunrisetimemins = new Date(data.sys.sunrise).getMinutes();

            moreinfotablecols[15].childNodes[3].textContent = sunrisetimehours + ":" + sunrisetimemins + " AM";
            let sunsettimehours = new Date(data.sys.sunset).getHours();
            let sunsettimemins = new Date(data.sys.sunset).getMinutes();

            if(sunsettimehours > 12)
            {
                sunrisetimehours = 24 - sunrisetimehours;
            }
            
            moreinfotablecols[16].childNodes[3].textContent = sunsettimehours + ":" + sunsettimemins + " PM";
        }
    })
    .catch((error) => {
        
        errordiv1.style.display = "block";
        errordiv1.innerText = error;
        // error message
    });
}

// Check whether the web browser is online or offline
if(navigator.onLine)
{
    console.log("online");

    function srcloc() 
    {
        errordiv1.style.display = "";
        
        // location
        var locationValue = document.getElementById('searchlocation').value;

        // API URL
        var base1 = 
        `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=${api}&units=metric`;

        fetchandshowweatherdata(base1, infodiv1, temperature1, summary1,
             rgba[0], searchlocationvideo,  loc1, icon1,
              searchedlocationdatatable, searchloctablecol);
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

                // API URL
                var base2 = 
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&` + 
                `appid=${api}&units=metric`;

                fetchandshowweatherdata(base2, infodiv2, temperature2, summary2,
                    rgba[1], currentlocationvideo,  loc2, icon2,
                     currentlocationdatatable, curloctablecol
               );
            }, (showError) => 
                {
                    switch(error.code)
                    {
                        case error.PERMISSION_DENIED:
                            errordiv2.innerText = "User denied the request for Geolocation.";
                            break;

                        case error.POSITION_UNAVAILABLE:
                            errordiv2.innerText = "Location information is unavailable.";
                            break;

                        case error.TIMEOUT:
                            errordiv2.innerText = "The request to get user location timed out.";
                            break;

                        case error.UNKNOWN_ERROR:
                            errordiv2.innerText = "An unknown error occurred.";
                            break;
                    }
            });
        }
        else
        {
            errordiv2.style.display = "block";
            errordiv2.innerText = "Geolocation is not supported by this browser.";
        }
    }

    window.addEventListener("load", geoloc);

    let inputarea = document.getElementById('searchlocation');

    inputarea.addEventListener("keydown", function(event) {
        if(event.key === "Enter") 
        {
            event.preventDefault();
            errordiv1.style.display = "";
            errordiv2.style.display = "";
            document.getElementById("searchbutton").click();
        }
    });
}
else
{
    console.log("offline");
    alert("Please connect to the Internet!");
}
