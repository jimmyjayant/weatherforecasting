# Weather Forecasting Website 🌤️

A simple and interactive **Weather Forecasting website** built using **HTML5, CSS3, and Vanilla JavaScript**.

The website uses the **OpenWeather API** to retrieve weather information and display it to the user.

## Features

* Displays weather information for the current location (Default).
* Displays weather information for the location searched by the user.
* Fetches real-time weather data using the **OpenWeather API**.
* Provides an easy-to-use and responsive interface.
* Dynamically updates weather information using JavaScript.
* Presents weather data in a clear and user-friendly format.

## Technologies Used

* **HTML5** – Used to create the structure of the website.
* **CSS3** – Used for styling and designing the user interface.
* **Vanilla JavaScript** – Used to handle user interactions and fetch weather data from the API.
* **OpenWeather API** – Used as the source for weather data.

## API

This project uses the **OpenWeather API** to fetch weather information.

[OpenWeather](https://openweathermap.org/)

The JavaScript application sends requests to the API and processes the returned data to display the relevant weather information on the website.

## How It Works

1. When the website opens, it provides weather information of the current location by default using `Geolocation API`.
2. The user can also search a location.
3. JavaScript sends a request to the OpenWeather API.
4. The API returns the weather information for the requested location.
5. The application processes the response.
6. The weather information is dynamically displayed on the webpage.

## Project Structure

```text
Weather-Forecasting/
│
|-- Images/
|-- Videos/
├── index.html
├── style.css
├── script.js
|-- readme.md
└── ...
```

> The exact file names may vary depending on the project structure.

## Running Locally

1. Clone or download the project.
2. Open the project directory.
3. Configure your OpenWeather API key if required.
4. Open `index.html` in a modern web browser.
5. Search for a location to view its weather information.

## Purpose

This project was created to practice and demonstrate fundamental **front-end web development** concepts, including HTML structure, CSS styling, JavaScript, API integration, asynchronous data fetching, and dynamic DOM manipulation.

## Acknowledgements

Weather data is provided by **OpenWeather** through its weather API.

## License

This project is intended for personal and educational use.
