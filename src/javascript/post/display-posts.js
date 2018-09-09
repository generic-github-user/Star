// display_posts.js
// Display listing of posts on Star home page

$(() => $("#header").load("includes/header.html"));

firebase.database().ref("posts").once("value").then(
      function(data) {
            var post_data = data.val();

            var posts = $("#post-container");
            posts.empty();

            Object.keys(post_data).forEach(
                  (key) => {
                        var post = post_data[key];

                        var post_main = $("<div class='post mdl-card mdl-shadow--2dp'></div>");
                        post_main.attr("id", "post-" + key);

                        var post_info = $("<div class='mdl-card__supporting-text post-info'></div>");
                        var post_title_link = $("<a></a>");
                        post_title_link.attr("href", "post.html?id=" + key)

                        var post_title = $("<h3 class='mdl-card__title mdl-card__title-text post-title'></h3>");
                        post_title.text(post.title);

                        post_title_link.append(post_title);

                        if (post.note != undefined && post.note != "") {
                              post_info.append(linkifyHtml(post.note) + "<br />");
                        }
                        if (post.created != undefined && post.created != "") {
                              post_info.append(post_created_formatted(post) + "<br />");
                        }
                        post_info.append(post_ratings_formatted(post));

                        var post_menu = $("<div class='mdl-card__menu'></div>");
                        var share_button = show_share_post(post.title, key, "list");
                        post_menu.append(share_button.icon);
                        $("#post-container").append(share_button.tooltip);

                        post_main.append(post_title_link);
                        post_main.append(post_info);
                        post_main.append(post_menu);
                        post_main.append(generate_rating_buttons(key));

                        posts.append(post_main);
                  }
            );

            $(".post-rating-button-container").addClass("mdl-card__actions mdl-card--border");

            update_post_ratings();
            componentHandler.upgradeDom();
      }
);