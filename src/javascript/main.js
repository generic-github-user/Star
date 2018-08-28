// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxupWBF6M4dVv15fZ1Oxf_EDi4FJ5iAzQ",
    authDomain: "star-5c536.firebaseapp.com",
    databaseURL: "https://star-5c536.firebaseio.com",
    projectId: "star-5c536",
    storageBucket: "star-5c536.appspot.com",
    messagingSenderId: "139695047939"
  };
  firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
