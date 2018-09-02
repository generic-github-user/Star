// display_post.js
// Functions for displaying a single post on the individual post page

var post_id = getQueryVariable("id");
firebase.database().ref("posts/" + post_id).once("value").then(
      (post) => {
            var post = post.val();
            document.title = post.title;

            const content = document.querySelector("#post");
            content.setAttribute("id", "post-" + post_id);
            content.innerHTML += "\
                  <h1>" + post.title + "</h1>\
                  <h3>" + post_created_formatted(post) + "</h3>\
                  <h3>" + post_ratings_formatted(post) + "</h3>\
            ";

            content.appendChild(generate_rating_buttons(post_id));
            update_post_ratings();

            console.log("Loaded post " + post_id);
            console.log("Post information: ", post);
      }
);
