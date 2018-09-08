// main.js
// A set of functions and variables that are used on multiple pages, but are not utilites. This includes displaying and formatting posts, and other similar processes.

// $(() => $("#header").load("includes/header.html"));

// Define list of month names to be used in date formatting
const month_names = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December"
];

// Get formatted date and time information about when post was created: "MMMM DD, YYYY - HH:MM"
const post_created_formatted = function (post) {
      // Check if post object contains "created" attribute
      if (post.created) {
            // Convert post creation date (stored as a string representing the number of milliseconds since Unix epoch) to a JavaScript date object
            var created = new Date(post.created);

            // Get number of hours from post creation date
            var hours = created.getHours();
            // If number of hours has only one digit, add a zero before
            if (hours < 10) {
                  hours = "0" + hours;
            }

            // Get number of minutes from post creation date
            var minutes = created.getMinutes();
            // If number of minutes has only one digit, add a zero before
            if (minutes < 10) {
                  minutes = "0" + minutes;
            }

            // Format date
            var date = month_names[created.getMonth()] + " " + created.getDate() + ", " + created.getFullYear();
            // Formate time
            var time = hours + ":" + minutes;

            // Combine and return date and time information
            return date + " - " + time;
      }
      // If post does not have property "created", return an empty string
      else {
            return "";
      }
}

// Get number of ratings for a specific post, formatted as a string - "x votes"
const post_ratings_formatted = function (post) {
      // Check if post has "num_ratings" property
      if (post.num_ratings != undefined) {
            // If post has exactly 1 rating, use singular form (1 vote)
            if (post.num_ratings == 1) {
                  return post.num_ratings + " vote";
            }
            // Otherwise, use plural form (ex. "354 votes")
            else {
                  return post.num_ratings + " votes";
            }
      }
      // If post does not have property "num_ratings", return an empty string
      else {
            return "";
      }
}

const post_note_formatted = function (post) {
      if (post.note) {
            return linkifyHtml(post.note);
      }
      else {
            return "";
      }
}

const logout = function () {
      firebase.auth().signOut();
      window.location.reload();
}

firebase.auth().onAuthStateChanged(
      function (user) {
            if (! user) {
                  var login = $(".login");
                  if (login) {
                        login.removeClass("hidden");
                  }
            }
            else {
                  var new_post_button = $("#new-post-button");
                  if (new_post_button) {
                        new_post_button.removeClass("hidden");
                  }

                  var logout = $(".logout");
                  if (logout) {
                        logout.removeClass("hidden");
                  }
            }
      }
);

$("body").append($("<div></div>").load("includes/dialogs/error.html"));

const error_dialog = function (title, message) {
      $("dialog#error h4#title").html(title);
      $("dialog#error p#message").html(message);
      $("dialog#error")[0].showModal();
      $("dialog#error .close").click(() => $("dialog#error")[0].close());
}


// $($("dialog#error button.close").attr("onclick", '$("dialog#error")[0].close()'));
// $("dialog").find("#error").find(".close").click(() => $("dialog")[0].close());
