// login.js
// Handles app sign-in functions for Star login page

console.log("Setting up login widget...");
firebase.auth().onAuthStateChanged(
      function(user) {
            if (!user) {
                  var ui = new firebaseui.auth.AuthUI(firebase.auth());

                  console.log("Creating Firebase UI login interface...");
                  ui.start('#firebaseui-auth-container', {
                        "callbacks": {
                              "uiShown": function() {
                                    console.log("Updating login panel information...");
                                    $(".firebaseui-title").text("Sign In to Star");
                              }
                        },
                        "signInSuccessUrl": "index.html",
                        "signInOptions": [
                              firebase.auth.EmailAuthProvider.PROVIDER_ID
                        ]
                  });
            } else {
                  console.log(
                        "User is already logged in.",
                        "Redirecting to home page..."
                  );
                  window.location.href = "index.html";
            }
      }
);
console.log("Login interface complete.");