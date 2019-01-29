# GT Crime Map

This project aims to provide an easy-to-use web app with an interactive map containing crime data
in and around Georgia Tech's campus.

## How to Run (Local)

First, ensure that you have [Node.js](https://nodejs.org/) installed.

Second, you must have a Google Maps API Key. In `client/src/config/`, make a file called `credentials.json`. It should be of this format:

```JSON
{
    "apiKey": "YOUR-API-KEY-GOES-HERE"
}
```

To run the front-end application, open your terminal in the project's root directory and enter

```
cd client
npm start
```