# GT Crime Map

This project aims to provide an easy-to-use web app with an interactive map containing crime data
in and around Georgia Tech's campus.

## How to Run (Local)

First, ensure that you have [Node.js](https://nodejs.org/) installed.

Second, you must have a Google Maps API Key. In `client/src/config/`, make a file called `credentials.json`. It should be of this format:

```JSON
{
    "mapsApiKey": "YOUR-GOOGLE-MAPS-API-KEY-GOES-HERE",
    "firebaseConfig": {} // get this object from the Firebase console
}
```

**NOTE**: The `firebaseConfig` property must have the value equal to that given in the [Firebase Console](https://console.firebase.google.com). To get the credentials object, go to the "Project Overview" page.
Here, press "Add app" and select the web app option. An HTML script should appear. Copy the `config`
object beneath `// Initialize Firebase` and put its value in your `credentials.json` under `firebaseConfig`.

To run the front-end application, open your terminal in the project's root directory and enter

```
cd client
npm start
```

## Backend / Modeling

Code for modeling thefts with Point Processes or clustering is included in `Point-Process-Crime-Map/`. Note: this code is not finished and thus is not accurate or usable at this point. 
