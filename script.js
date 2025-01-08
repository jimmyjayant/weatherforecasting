const currentdateandtime = document.getElementsByClassName("currentdatetime")[0];

setInterval(function() {
    currentdateandtime.innerHTML = new Date();
}, 1000);


// Check whether the web browser is online or offline
if(navigator.onLine)
{
    console.log("online");

    // Declaring the variables
    let lon;
    let lat;

    let infodiv1 = document.getElementsByClassName("info1")[0];
    let infodiv2 = document.getElementsByClassName("info2")[0];
    let searchlocationvideo = document.getElementById("searchlocationvideo");
    let currentlocationvideo = document.getElementById("currentlocationvideo");
    let searchedlocationdatatable = document.getElementById("searchlocdata");
    let currentlocationtdatatable = document.getElementById("currentlocdata");
    let curloctablecol = currentlocationtdatatable.getElementsByTagName("tr");
    let searchloctablecol = searchedlocationdatatable.getElementsByTagName("tr");
    
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

    function srcloc() 
    {
        // API Id
        const api = "e1d3fbcd57d923d8c54b6ff2297d8b33";

        // location
        const locationValue = document.getElementById('searchlocation').value;


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
            infodiv1.style.display = "flex";
            temperature1.innerHTML = Math.floor(data.main.temp) + "°C";                
            summary1.textContent = data.weather[0].description;
            rgba[0].style.display = "block";
            searchlocationvideo.style.display = "block";
            searchlocationvideo.style.objectFit = "fill";

            switch(data.weather[0].description)
            {
                case 'haze':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/haze.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/haze.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/haze.mp4";
                            break;

                        case (window.innerWidth <= 1920):
                            searchlocationvideo.src = "Videos/1k/haze.mp4";
                            break;

                        case (window.innerWidth <= 2560):
                            searchlocationvideo.src = "Videos/2k/haze.mp4";
                            break;

                        case (window.innerWidth > 2560):
                            searchlocationvideo.src = "Videos/4k/haze.mp4";
                            break;
                    }
                    break;

                case 'clear sky':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/clear sky1.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/clear sky1.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/clear sky1.mp4";
                            break;

                        case (window.innerWidth > 1280):
                            searchlocationvideo.src = "Videos/1k/clear sky1.mp4";
                            break;
                    }
                    break;

                case 'few clouds':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/cloudy.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/cloudy.mp4";
                            break;

                        case (window.innerWidth > 800):
                            searchlocationvideo.src = "Videos/1280/cloudy.mp4";
                            break;
                    }
                    break;

                case 'scattered clouds':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/scattered clouds.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/scattered clouds.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/scattered clouds.mp4";
                            break;

                        case (window.innerWidth > 1280):
                            searchlocationvideo.src = "Videos/1k/scattered clouds.mp4";
                            break;
                    }
                    break;

                case 'broken clouds':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/broken clouds.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/broken clouds.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/broken clouds.mp4";
                            break;

                        case (window.innerWidth > 1280):
                            searchlocationvideo.src = "Videos/1k/broken clouds.mp4";
                            break;
                    }
                    break;
                
                case 'shower rain':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/shower rain.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/shower rain.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/shower rain.mp4";
                            break;

                        case (window.innerWidth <= 1920):
                            searchlocationvideo.src = "Videos/1k/shower rain.mp4";
                            break;

                        case (window.innerWidth <= 2560):
                            searchlocationvideo.src = "Videos/2k/shower rain.mp4";
                            break;

                        case (window.innerWidth > 2560):
                            searchlocationvideo.src = "Videos/4k/shower rain.mp4";
                            break;
                    }
                    break;

                case 'rain':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/rainy.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/rainy.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/rainy.mp4";
                            break;

                        case (window.innerWidth <= 1920):
                            searchlocationvideo.src = "Videos/1k/rainy.mp4";
                            break;

                        case (window.innerWidth <= 2560):
                            searchlocationvideo.src = "Videos/2k/rainy.mp4";
                            break;

                        case (window.innerWidth > 2560):
                            searchlocationvideo.src = "Videos/4k/rainy.mp4";
                            break;
                    }
                    break;

                case 'thunderstorm':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/storm.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/storm.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/storm.mp4";
                            break;

                        case (window.innerWidth > 1280):
                            searchlocationvideo.src = "Videos/1k/storm.mp4";
                            break;
                    }
                    break;

                case 'snow':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/winter.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/winter.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/winter.mp4";
                            break;

                        case (window.innerWidth > 1280):
                            searchlocationvideo.src = "Videos/1k/winter.mp4";
                            break;
                    }
                    break;

                case 'mist':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/fog1.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/fog1.mp4";
                            break;

                        case (window.innerWidth <= 1280):
                            searchlocationvideo.src = "Videos/1280/fog1.mp4";
                            break;

                        case (window.innerWidth > 1280):
                            searchlocationvideo.src = "Videos/1k/fog1.mp4";
                            break;
                    }
                    break;

                case 'fog':
                    switch(true)
                    {
                        case (window.innerWidth <= 600):
                            searchlocationvideo.src = "Videos/600/fog.mp4";
                            break;

                        case (window.innerWidth <= 800):
                            searchlocationvideo.src = "Videos/800/fog.mp4";
                            break;

                        case (window.innerWidth > 800):
                            searchlocationvideo.src = "Videos/1280/fog.mp4";
                            break;
                    }
                    break;
            }

            loc1.textContent = data.name + ", " + data.sys.country;
            let weathericon1 = data.weather[0].icon;
            let url1 = `https://openweathermap.org/img/wn/${weathericon1}.png`;
            icon1.innerHTML = `<img src='${url1}' style='width:clamp(2rem, 2rem + 2vw, 4.5rem);height:clamp(2rem, 2rem + 2vw, 4.5rem);'>`;
            searchedlocationdatatable.style.display = "block";
            searchloctablecol[0].childNodes[3].textContent = data.name;
            searchloctablecol[1].childNodes[3].textContent = data.sys.country;
            searchloctablecol[2].childNodes[3].textContent = data.weather[0].main;
            searchloctablecol[3].childNodes[3].textContent = Math.floor(data.main.temp - kelvin) + "°C";
            searchloctablecol[4].childNodes[3].textContent = data.main.pressure + " mb";
            searchloctablecol[5].childNodes[3].textContent = data.main.humidity + " %";
            searchloctablecol[6].childNodes[3].textContent = data.coord.lon;
            searchloctablecol[7].childNodes[3].textContent = data.coord.lat;
            searchloctablecol[8].childNodes[3].textContent = data.wind.speed + " km/h";
            searchloctablecol[9].childNodes[3].textContent = data.wind.deg + " Deg";
            searchloctablecol[10].childNodes[3].textContent = Math.floor(data.main.feels_like - kelvin) + "°C";
            searchloctablecol[11].childNodes[3].textContent = Math.floor(data.main.temp_min - kelvin) + "°C";
            searchloctablecol[12].childNodes[3].textContent = Math.floor(data.main.temp_max - kelvin) + "°C";
            searchloctablecol[13].childNodes[3].textContent = data.main.sea_level + " m";
            searchloctablecol[14].childNodes[3].textContent = data.main.grnd_level + " m";
            let sunrisetimehours = new Date(data.sys.sunrise).getHours();
            let sunrisetimemins = new Date(data.sys.sunrise).getMinutes();
            let sunriseampm = "AM";
            if(sunrisetimehours >= 12)
            {
                sunriseampm = "PM";
            }
            else
            {
                sunriseampm = "AM";
            }

            if(sunrisetimehours > 12)
            {
                sunrisetimehours = 24 - sunrisetimehours;
            }
            searchloctablecol[15].childNodes[3].textContent = sunrisetimehours + ":" + sunrisetimemins + sunriseampm;
            let sunsettimehours = new Date(data.sys.sunset).getHours();
            let sunsettimemins = new Date(data.sys.sunset).getMinutes();
            let sunsetampm = "AM";
            if(sunsettimehours >= 12)
            {
                sunsetampm = "PM";
            }
            else
            {
                sunsetampm = "AM";
            }

            if(sunsettimehours > 12)
            {
                sunrisetimehours = 24 - sunrisetimehours;
            }
            searchloctablecol[16].childNodes[3].textContent = sunsettimehours + ":" + sunsettimemins + sunsetampm;
        });
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
                    infodiv2.style.display = "flex";
                    temperature2.innerHTML = Math.floor(data.main.temp - kelvin) + "°C";                
                    summary2.textContent = data.weather[0].description;
                    rgba[1].style.display = "block";
                    currentlocationvideo.style.display = "block";
                    currentlocationvideo.style.objectFit = "fill";

                    switch(data.weather[0].description)
                    {
                        case 'haze':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/haze.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/haze.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/haze.mp4";
                                    break;

                                case (window.innerWidth <= 1920):
                                    currentlocationvideo.src = "Videos/1k/haze.mp4";
                                    break;

                                case (window.innerWidth <= 2560):
                                    currentlocationvideo.src = "Videos/2k/haze.mp4";
                                    break;

                                case (window.innerWidth > 2560):
                                    currentlocationvideo.src = "Videos/4k/haze.mp4";
                                    break;
                            }
                            break;

                        case 'clear sky':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/clear sky1.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/clear sky1.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/clear sky1.mp4";
                                    break;

                                case (window.innerWidth > 1280):
                                    currentlocationvideo.src = "Videos/1k/clear sky1.mp4";
                                    break;
                            }
                            break;

                        case 'few clouds':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/cloudy.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/cloudy.mp4";
                                    break;

                                case (window.innerWidth > 800):
                                    currentlocationvideo.src = "Videos/1280/cloudy.mp4";
                                    break;
                            }
                            break;

                        case 'scattered clouds':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/scattered clouds.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/scattered clouds.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/scattered clouds.mp4";
                                    break;

                                case (window.innerWidth > 1280):
                                    currentlocationvideo.src = "Videos/1k/scattered clouds.mp4";
                                    break;
                            }
                            break;

                        case 'broken clouds':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/broken clouds.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/broken clouds.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/broken clouds.mp4";
                                    break;

                                case (window.innerWidth > 1280):
                                    currentlocationvideo.src = "Videos/1k/broken clouds.mp4";
                                    break;
                            }
                            break;
                        
                        case 'shower rain':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/shower rain.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/shower rain.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/shower rain.mp4";
                                    break;

                                case (window.innerWidth <= 1920):
                                    currentlocationvideo.src = "Videos/1k/shower rain.mp4";
                                    break;

                                case (window.innerWidth <= 2560):
                                    currentlocationvideo.src = "Videos/2k/shower rain.mp4";
                                    break;

                                case (window.innerWidth > 2560):
                                    currentlocationvideo.src = "Videos/4k/shower rain.mp4";
                                    break;
                            }
                            break;

                        case 'rain':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/rainy.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/rainy.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/rainy.mp4";
                                    break;

                                case (window.innerWidth <= 1920):
                                    currentlocationvideo.src = "Videos/1k/rainy.mp4";
                                    break;

                                case (window.innerWidth <= 2560):
                                    currentlocationvideo.src = "Videos/2k/rainy.mp4";
                                    break;

                                case (window.innerWidth > 2560):
                                    currentlocationvideo.src = "Videos/4k/rainy.mp4";
                                    break;
                            }
                            break;

                        case 'thunderstorm':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/storm.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/storm.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/storm.mp4";
                                    break;

                                case (window.innerWidth > 1280):
                                    currentlocationvideo.src = "Videos/1k/storm.mp4";
                                    break;
                            }
                            break;

                        case 'snow':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/winter.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/winter.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/winter.mp4";
                                    break;

                                case (window.innerWidth > 1280):
                                    currentlocationvideo.src = "Videos/1k/winter.mp4";
                                    break;
                            }
                            break;

                        case 'mist':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/fog1.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/fog1.mp4";
                                    break;

                                case (window.innerWidth <= 1280):
                                    currentlocationvideo.src = "Videos/1280/fog1.mp4";
                                    break;

                                case (window.innerWidth > 1280):
                                    currentlocationvideo.src = "Videos/1k/fog1.mp4";
                                    break;
                            }
                            break;

                        case 'fog':
                            switch(true)
                            {
                                case (window.innerWidth <= 600):
                                    currentlocationvideo.src = "Videos/600/fog.mp4";
                                    break;

                                case (window.innerWidth <= 800):
                                    currentlocationvideo.src = "Videos/800/fog.mp4";
                                    break;

                                case (window.innerWidth > 800):
                                    currentlocationvideo.src = "Videos/1280/fog.mp4";
                                    break;
                            }
                            break;
                    }

                    loc2.textContent = data.name + ", " + data.sys.country;
                    let weathericon2 = data.weather[0].icon;
                    let url2 = `https://openweathermap.org/img/wn/${weathericon2}.png`;
                    icon2.innerHTML = `<img src='${url2}' style='width:clamp(2rem, 2rem + 2vw, 4.5rem);height:clamp(2rem, 2rem + 2vw, 4.5rem);'>`;
                    currentlocationtdatatable.style.display = "block";
                    curloctablecol[0].childNodes[3].textContent = data.name;
                    curloctablecol[1].childNodes[3].textContent = data.sys.country;
                    curloctablecol[2].childNodes[3].textContent = data.weather[0].main;
                    curloctablecol[3].childNodes[3].textContent = Math.floor(data.main.temp - kelvin) + "°C";
                    curloctablecol[4].childNodes[3].textContent = data.main.pressure + " mb";
                    curloctablecol[5].childNodes[3].textContent = data.main.humidity + " %";
                    curloctablecol[6].childNodes[3].textContent = data.coord.lon;
                    curloctablecol[7].childNodes[3].textContent = data.coord.lat;
                    curloctablecol[8].childNodes[3].textContent = data.wind.speed + " km/h";
                    curloctablecol[9].childNodes[3].textContent = data.wind.deg + " Deg";
                    curloctablecol[10].childNodes[3].textContent = Math.floor(data.main.feels_like - kelvin) + "°C";
                    curloctablecol[11].childNodes[3].textContent = Math.floor(data.main.temp_min - kelvin) + "°C";
                    curloctablecol[12].childNodes[3].textContent = Math.floor(data.main.temp_max - kelvin) + "°C";
                    curloctablecol[13].childNodes[3].textContent = data.main.sea_level + " m";
                    curloctablecol[14].childNodes[3].textContent = data.main.grnd_level + " m";
                    let sunrisetimehours = new Date(data.sys.sunrise).getHours();
                    let sunrisetimemins = new Date(data.sys.sunrise).getMinutes();
                    let sunriseampm = "AM";
                    if(sunrisetimehours >= 12)
                    {
                        sunriseampm = "PM";
                    }
                    else
                    {
                        sunriseampm = "AM";
                    }

                    if(sunrisetimehours > 12)
                    {
                        sunrisetimehours = 24 - sunrisetimehours;
                    }
                    curloctablecol[15].childNodes[3].textContent = sunrisetimehours + ":" + sunrisetimemins + sunriseampm;
                    let sunsettimehours = new Date(data.sys.sunset).getHours();
                    let sunsettimemins = new Date(data.sys.sunset).getMinutes();
                    let sunsetampm = "AM";
                    if(sunsettimehours >= 12)
                    {
                        sunsetampm = "PM";
                    }
                    else
                    {
                        sunsetampm = "AM";
                    }

                    if(sunsettimehours > 12)
                    {
                        sunrisetimehours = 24 - sunrisetimehours;
                    }
                    curloctablecol[16].childNodes[3].textContent = sunsettimehours + ":" + sunsettimemins + sunsetampm;
                    console.log(new Date(data.sys.sunset).getHours());
                });
            });
        }
    }

    window.addEventListener("load", geoloc);

    let inputarea = document.getElementById('searchlocation');

    inputarea.addEventListener("keydown", function(event) {
        if(event.key === "Enter") 
        {
            event.preventDefault();
            document.getElementById("searchbutton").click();
        }
    });
}
else
{
    console.log("offline");
}
