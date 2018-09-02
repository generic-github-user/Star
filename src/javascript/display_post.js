// display_post.js
// Functions for displaying a single post on the individual post page

// Get post ID from URL
var post_id = getQueryVariable("id");
// Get post information from Firebase Realtime Database using ID
firebase.database().ref("posts/" + post_id).once("value").then(
      (post) => {
            // Get value from post object
            var post = post.val();
            // Update page title to match post title
            document.title = post.title;

            // Get post container HTML element (div#post)
            const content = document.querySelector("#post");
            content.setAttribute("id", "post-" + post_id);
            // Fill in HTML content of post
            content.innerHTML += "\
                  <h1>" + post.title + "</h1>\
                  <h3>" + post_created_formatted(post) + "</h3>\
                  <h3>" + post_ratings_formatted(post) + "</h3>\
            ";

            // Add post rating buttons to page
            content.appendChild(generate_rating_buttons(post_id));
            // Update buttons to represent current post rating state
            update_post_ratings();

            // Log information about post
            console.log("Loaded post " + post_id);
            console.log("Post information: ", post);
      }
);
