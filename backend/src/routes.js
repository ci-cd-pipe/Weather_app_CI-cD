const { geocodeAsync, forecastResult } = require('./utils')
const express = require('express');

const router = express.Router();

router.get('/weather', async (req, res) => {
    const { location } = req.query;
    if (!location || location === "undefined") {
        res.status(400).send("Please provide a location!")
        return;
    }
    //Turn the location string into latitude and longitude
    const result = await geocodeAsync(location)
    if (result && result.length) {
        const loc = result[0].geometry.location
        //Use the coordinates to get the weather forecast
        const forecast = await forecastResult(loc.lat, loc.lng)
        if (forecast) {
            res.send(forecast)
        } else {
            res.status(400).send("Unable to get weather data")
        }
    } else {
        res.status(400).send("Invalid location")
    }

});

router.get('/', async (req, res) => {
    res.send("Home Page, Any ILLEGAL access to this server will lead to prosecution.")
})

router.get('*', (req, res) => {
    res.send('404 page')
})


module.exports = router;