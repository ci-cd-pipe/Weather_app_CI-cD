## Overview

This frontend app is written using 'React Native' for Android & iOS. On the main page user can 'sign up', 'login' or 'skip login' to access the functionality of the app. The Signin and Signup screens require an email and password from the user which are sent to firebase for auth, However, with the 'skip login' button in the signin screen the user can navigate to the location input screen right away without the needing to authenticate. To authenticate the user frontend connects to the 'Firebase Auth' service.

   - 'Firebase Auth' provides methods to create and manage users that use their email addresses and passwords to sign in. This guide helps to setup firebase on your project: https://rnfirebase.io/ . For firebase authentication check: https://rnfirebase.io/auth/usage .

In the location input screen: the user types in a city name and google's place Automcomplete API provides a list of prediction based in that input, check the docs here: https://developers.google.com/maps/documentation/javascript/places-autocomplete

The selected city name provided from google is sent as query in the url to get a prediction from the 'backend app' like this: `http://weather-app-backend.example.com/weather?location=${city}` .

When a weather report is received it is shown on the screen. Additionally, request details get stored in a 'Firestore Cloud Database' for analytics.

   - 'Firestore Cloud Database' is a NoSQL document database to easily store, sync, and query data for mobile and web apps - at global scale.

The .env variables used are the server url and A google place API key. In our case we will run the frontend on our Android studio emulators so we should set variables directly in the .env file.

   There are 2 environment variables you should set:
   - **SERVER_URL** as an environment variable that will contain a domain address. This domain is a production **backend** domain address. This will be used by frontend to send requests to the backend. For example:
   ```
   SERVER_URL=http://weather-app-backend.example.com
   ```
   - **PLACES_API** environment variable will contain a google place autcomplete API key.

## Android development environment

To test the frontend app you will need to install Android Studio and its dependencies. Then, set up a simple emulator there. This app works for both Android & IOS so you can choose what you prefer. Please make sure to carefully follow the 'Android development environment' part of the
https://reactnative.dev/docs/environment-setup guide.

## Flowchart of how it works

![Flowchart](https://github.com/312-bc/weather-app/blob/main/frontend/flowchart.png)

## How to run:

  1. Install **Node** latest version [*Run node -v if version shown so node properly installed*]

  2. Run your virtual device (emulator) in the Android Studio
  
  3. Install all npm dependencies using below command:
     ```
     npm install
     ```
     
  4. Run the app on a device using below command:
     ```
     npx react-native start
     ```
