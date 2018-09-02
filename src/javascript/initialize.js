// initialize.js
// Initialize Firebase app for use with Firebase SDK and API functions, primarily data storage in the Realtime Database

// Create config object containing necessary information for app initialization, including API key and project ID
var config = {
      "apiKey": "AIzaSyBxupWBF6M4dVv15fZ1Oxf_EDi4FJ5iAzQ",
      "authDomain": "star-5c536.firebaseapp.com",
      "databaseURL": "https://star-5c536.firebaseio.com",
      "projectId": "star-5c536",
      "storageBucket": "star-5c536.appspot.com",
      "messagingSenderId": "139695047939"
};

// Initialize Firebase app with config information object
firebase.initializeApp(config);
// Store reference to Firebase Realtime Database in abbreviated variable
var database = firebase.database();
// Log completion message to console
console.log("Firebase initialized.", config);
