// File for fetching credentials from local `credentials.json` file
let credentials = require("./credentials.json");

export const { mapsApiKey } = credentials
export const { firebaseConfig }= credentials
export default credentials;