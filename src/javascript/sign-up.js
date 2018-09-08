const create_user = function () {
      var email = $("#email-input").val().toString();
      var password = $("#password-input").val().toString();

      if ((!email || email == "") && (!password || password == "")) {
            error_dialog("Error", "You must enter an e-mail address and a password to create an account.");
      }
      else if (!email || email == "") {
            error_dialog("Error", "You must enter an e-mail address to create an account.");
      }
      else if (!password || password == "") {
            error_dialog("Error", "You must enter an password to create an account.");
      }
      else if (password.length < 8) {
            error_dialog("Error", "Password must be at least 8 characters long.");
      }
      else if (password.length > 64) {
            error_dialog("Error", "Password must be between 8 and 64 characters long.");
      }
      else {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                  console.log(error.code);
                  console.log(error.message);
            });
            console.log("Account successfully created.");
            window.location.href = "index.html";
      }
}

$("#submit-button").click(create_user);
