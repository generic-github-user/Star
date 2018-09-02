// main.js
// A set of functions and variables that are used on multiple pages, but are not utilites. This includes displaying and formatting posts, and other similar processes.

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

const post_created_formatted = function (post) {
      if (post.created) {
            var created = new Date(post.created);

            var hours = created.getHours();
            if (hours < 10) {
                  hours = "0" + hours;
            }

            var minutes = created.getMinutes();
            if (minutes < 10) {
                  minutes = "0" + minutes;
            }

            var date = month_names[created.getMonth()] + " " + created.getDate() + ", " + created.getFullYear();
            var time = hours + ":" + minutes;

            return date + " - " + time;
      }
      else {
            return "";
      }
}

const post_ratings_formatted = function (post) {
      if (post.num_ratings) {
            if (post.num_ratings == 1) {
                  return post.num_ratings + " vote";
            }
            else {
                  return post.num_ratings + " votes";
            }
      }
      else {
            return "";
      }
}
