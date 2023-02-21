## Overview

Backend app is written in 'Node JS'. It uses 'Google API' to transform location names into latitudes and longitudes. To access it 'GOOGLE_API_KEY' env variable is set in the '.env' file.

To set a variable:
  1. Set up a google project using this documentation: https://developers.google.com/maps/documentation/geocoding/start .<br />
  2. Set the key as GOOGLE_API_KEY in the .env file. <br />


The results you get from Google's API are coordinates ( latitude and longitude ). Those are passed to open weather map API to get a forecast on that location. To access it 'WEATHER_FORECAST_KEY' env variable is set in the previously mentioned '.env' file.

To set a variable:
  1. Set up an OpenWeather API key through here: https://home.openweathermap.org/subscriptions/unauth_subscribe/onecall_30/base .<br />
  2. Set the key as WEATHER_FORECAST_KEY in the .env file.<br />


The app consists of 2 main routes ( The home route where it says so and a weather route where you pass the location in the request body, check the weatherCall image ) and another routes that takes care of the 404 calls ( Unidentified routes ). To provide routing express library is used. Check the docs here: http://expressjs.com/en/guide/routing.html .

## Flowchart of how it works

![](https://github.com/312-bc/weather-app/blob/main/backend/flowchartForBE.png)

## How to run:

  1. Install **Node** latest version [*Run node -v if version shown so node properly installed*]
  
  2. Install all npm dependencies using below command:
     ```
     npm install
     ```
     
  3. Run node server using below command:
     ```
     npm start
     ```
     
  4. Here you go server is up at *http://localhost:3000/*
  
## How to test:

     *http://localhost:3000/weather?location={CITY_NAME}*
     
   ### For instance:
     
     *http://localhost:3000/weather?location=bishkek*
