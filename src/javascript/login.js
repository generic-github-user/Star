// login.js
// Handles app sign-in functions for Star login page

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
      signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
});
