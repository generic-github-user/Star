// display_posts.js
// Display listing of posts on Star home page

firebase.database().ref("posts").once("value").then(
      function (data) {
            var post_data = data.val();

            var posts = $("#post-container");
            posts.empty();

            var style = document.createElement("style");

            Object.keys(post_data).forEach(
                  (key) => {
                        var post = post_data[key];

                        var post_main = document.createElement("div");
                        post_main.className = "post";
                        post_main.id = "post-" + key;
                        var left = document.createElement("div");
                        left.className = "left";
                        var right = document.createElement("div");
                        right.className = "right";

                        var post_title_link = document.createElement("a");
                        var destination_url = "post.html?id=" + key;
                        post_title_link.setAttribute("href", destination_url)

                        var post_title = document.createElement("h3");
                        post_title.className = "post-title";
                        post_title.innerHTML = post.title;


                        post_title_link.appendChild(post_title);
                        left.appendChild(post_title_link);

                        if (post.note) {
                              var post_note = document.createElement("h5");
                              post_note.innerHTML = linkifyHtml(post.note);
                              left.appendChild(post_note);
                        }

                        var post_created = document.createElement("p");
                        post_created.innerHTML = post_created_formatted(post);
                        left.appendChild(post_created);

                        var post_ratings = document.createElement("p");
                        post_ratings.innerHTML = post_ratings_formatted(post);
                        left.appendChild(post_ratings);

                        right.appendChild(generate_rating_buttons(key));

                        post_main.appendChild(left);
                        post_main.appendChild(right);
                        post_main.appendChild(show_share_post(post.title, key, "list"));
                        posts.append(post_main);
                  }
            );

            document.head.appendChild(style);
            update_post_ratings();
            componentHandler.upgradeDom();
      }
);
