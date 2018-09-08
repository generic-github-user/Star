// login.js
// Handles app sign-in functions for Star login page

// $(() => $("#content").html(
//       '<h1>Welcome to Star</h1>\
//       <div id="firebaseui-auth-container"></div>'
// ));

// $.getScript("../javascript/main.js")
//     .then(function() { $("#content").html(
//       '<h1>Welcome to Star</h1>\
//       <div id="firebaseui-auth-container"></div>'
// ) })

console.log("Setting up login widget...");
firebase.auth().onAuthStateChanged(
      function (user) {
            if (! user) {
                  var ui = new firebaseui.auth.AuthUI(firebase.auth());

                  console.log("Creating Firebase UI login interface...");
                  ui.start('#firebaseui-auth-container', {
                        "callbacks": {
                              console.log("Updating login panel information...");
                              "uiShown": function () {
                                    $(".firebaseui-title").text("Sign In to Star");
                                    $(".firebaseui-id-page-password-sign-in").append("<p id='sign-up-message'>Don't have an account? <a href='sign-up.html'>Create one here</a></p>");
                              }
                        },
                        "signInSuccessUrl": "index.html",
                        "signInOptions": [
                              firebase.auth.EmailAuthProvider.PROVIDER_ID
                        ]
                  });
            }
            else {
                  console.log(
                        "User is already logged in.",
                        "Redirecting to home page..."
                  );
                  window.location.href = "index.html";
            }
      }
);
console.log("Login interface complete.");
