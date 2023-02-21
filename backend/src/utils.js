const axios = require('axios')

const google = axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/`,
    timeout: 10000,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json"
    }
});

//Google Geocoding docs: https://developers.google.com/maps/documentation/geocoding/start
const google_url = `/geocode/json?key=${process.env.GOOGLE_API_KEY}&sensor=false`;
const geocodeAsync = (address) => {
    return new Promise((res, rej) => {
        google.get(`${google_url}&address=${address}`)
            .then(resp => res(resp.data.results))
            .catch((e) => rej(null))
    })
}

//OpenWeather docs: https://openweathermap.org/current
const forecastResult = (lat, lng) => {
    return new Promise((res, rej) => {
        //Units here can be standard - metric or imperial
        const selectedUnit = { name: "metric", symbol: "°C" }
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_FORECAST_KEY}&units=${selectedUnit.name}`)
            .then(resp => {
                const currWeather = resp.data.current
                res({
                    temp: `${currWeather.temp} ${selectedUnit.symbol}`,
                    humidity: `${currWeather.humidity}%`,
                    windSpeed: `${currWeather.wind_speed} km/h`,
                    title: currWeather.weather[0].main,
                    image: getImageFromDescription(currWeather.weather[0].main),
                    description: currWeather.weather[0].description,
                })
            })
            .catch((e) => rej(null))
    })
}

//Select image based on main result from OpenWeather, I've added options for 3 different types of result from the main forecast
const getImageFromDescription = (text) => {
    if (text === "Clouds") return "https://iili.io/SMAwtS.jpg"
    else if (text === "Rain") return "https://iili.io/SMAOo7.md.jpg"
    else return "https://iili.io/SMAjN2.jpg"
}


module.exports = { geocodeAsync, forecastResult }
