// display_posts.js
// Display listing of posts on Star home page

<<<<<<< HEAD
$(() => $("#header").load(window.location.origin + "/src/html/includes/header.html"));
=======
$(() => $("#header").load("includes/header.html"));
>>>>>>> parent of 5a8e973... Added pages HTML directory

firebase.database().ref("posts").once("value").then(
      function(data) {
            var post_data = data.val();

            var posts = $("#post-container");
            posts.empty();

            Object.keys(post_data).forEach(
                  (key) => {
                        var post = post_data[key];

                        var post_main = $("<div></div>");
                        post_main.addClass("post");
                        post_main.attr("id", "post-" + key);
                        var left = $("<div></div>");
                        left.addClass("left");
                        var right = $("<div></div>");
                        right.addClass("right");

                        var post_title_link = $("<a></a>");
                        var destination_url = "post.html?id=" + key;
                        post_title_link.attr("href", destination_url)

                        var post_title = $("<h3></h3>");
                        post_title.addClass("post-title");
                        post_title.text(post.title);


                        post_title_link.append(post_title);
                        left.append(post_title_link);

                        if (post.note) {
                              var post_note = $("<h5></h5>");
                              post_note.html(linkifyHtml(post.note));
                              left.append(post_note);
                        }

                        var post_created = $("<p></p>");
                        post_created.text(post_created_formatted(post));
                        left.append(post_created);

                        var post_ratings = $("<p></p>");
                        post_ratings.text(post_ratings_formatted(post));
                        left.append(post_ratings);

                        right.append(generate_rating_buttons(key));

                        post_main.append(left);
                        post_main.append(right);
                        post_main.append(show_share_post(post.title, key, "list"));
                        posts.append(post_main);
                  }
            );

            update_post_ratings();
            componentHandler.upgradeDom();
      }
);