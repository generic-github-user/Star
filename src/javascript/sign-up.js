const create_user = function () {
      console.log("Creating new user account...");
      console.log("Getting user information from page...");
      var email = $("#email-input").val().toString();
      var password = $("#password-input").val().toString();

      console.log("Verifying user information...");
      if ((!email || email == "") && (!password || password == "")) {
            error_dialog("Error", "You must enter an e-mail address and a password to create an account.");
            console.error("E-mail address and password must be provided for account registration.");
      }
      else if (!email || email == "") {
            error_dialog("Error", "You must enter an e-mail address to create an account.");
            console.error("E-mail address must be provided for account registration.");
      }
      else if (!password || password == "") {
            error_dialog("Error", "You must enter an password to create an account.");
            console.error("Password must be provided for account registration.");
      }
      else if (password.length < 8) {
            error_dialog("Error", "Password must be at least 8 characters long.");
            console.error("Password is " + password.length + " characters long. Minimum password length is 8 characters.");
      }
      else if (password.length > 64) {
            error_dialog("Error", "Password must be between 8 and 64 characters long.");
            console.error("Password is " + password.length + " characters long. Maximum password length is 64 characters.");
      }
      console.log("User information validated. Creating account...");
      else {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                  console.log(error.code);
                  console.log(error.message);
            });
            console.log(
                  "Account successfully created.",
                  "Redirecting to home page."
            );
            window.location.href = "index.html";
      }
}

$("#submit-button").click(create_user);
