// Create a new user account with a provided e-mail address and password
const create_user = function() {
      console.log("Creating new user account...");
      console.log("Getting user information from page...");
      // Get e-mail address and password from text input fields on page
      var email = $("#email-input").val().toString();
      var password = $("#password-input").val().toString();

      // Validate user inputs; these will also be validated in the backend using Firebase's account creation rules
      console.log("Verifying user information...");
      // Check for e-mail address and password
      if ((!email || email == "") && (!password || password == "")) {
            error_dialog("Error", "You must enter an e-mail address and a password to create an account.");
            console.error("E-mail address and password must be provided for account registration.");
      }
      // Check for e-mail address
      else if (!email || email == "") {
            error_dialog("Error", "You must enter an e-mail address to create an account.");
            console.error("E-mail address must be provided for account registration.");
      }
      // Check for password
      else if (!password || password == "") {
            error_dialog("Error", "You must enter an password to create an account.");
            console.error("Password must be provided for account registration.");
      }
      // Check that password length is greater than minimum value (8 characters)
      else if (password.length < 8) {
            error_dialog("Error", "Password must be at least 8 characters long.");
            console.error("Password is " + password.length + " characters long. Minimum password length is 8 characters.");
      }
      // Check that password length is smaller than maximum value (64 characters)
      else if (password.length > 64) {
            error_dialog("Error", "Password must be between 8 and 64 characters long.");
            console.error("Password is " + password.length + " characters long. Maximum password length is 64 characters.");
      } else {
            console.log("User information validated. Creating account...");
            // Use Firebase's createUserWithEmailAndPassword function to create a password
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                  console.log(error.code);
                  console.log(error.message);
            });
            console.log(
                  "Account successfully created.",
                  "Redirecting to home page."
            );
            // Redirect to home page (index.html)
            window.location.href = "index.html";
      }
}

// Add event listener to create a user when submit button is clicked
$("#submit-button").click(create_user);