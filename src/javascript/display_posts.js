firebase.database().ref("posts").once("value").then(
      function (data) {
            var post_data = data.val();

            var posts = document.querySelector("#post-container");
            posts.innerHTML = "";

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
                              post_note.innerHTML = post.note;
                              left.appendChild(post_note);
                        }

                        var post_created = document.createElement("p");
                        post_created.innerHTML = post_created_formatted(post);
                        left.appendChild(post_created);

                        var post_ratings = document.createElement("p");
                        post_ratings.innerHTML = post_ratings_formatted(post);
                        left.appendChild(post_ratings);

                        // var slider = document.createElement("input");
                        // slider.setAttribute("type", "range");
                        // slider.setAttribute("value", "0");
                        // slider.setAttribute("tabindex", "0");
                        // slider.setAttribute("min", "0");
                        // slider.setAttribute("max", "100");
                        // slider.className = "mdl-slider mdl-js-slider";
                        // right.appendChild(slider);

                        // var slider = document.createElement("input");
                        // slider.outerHTML = "<input class='mdl-slider mdl-js-slider' type='range' min='0' max='100' value='0' tabindex='0'>";
                        // right.appendChild(slider);

                        // right.innerHTML += "<input class='mdl-slider mdl-js-slider' type='range' min='0' max='100' value='0' tabindex='0'>";

                        // var colors = [
                        //       {
                        //             "red": 237,
                        //             "green": 11,
                        //             "blue": 11
                        //       },
                        //       {
                        //             "red": 237,
                        //             "green": 134,
                        //             "blue": 9
                        //       },
                        //       {
                        //             "red": 255,
                        //             "green": 255,
                        //             "blue": 0
                        //       },
                        //       {
                        //             "red": 15,
                        //             "green": 229,
                        //             "blue": 0
                        //       },
                        //       {
                        //             "red": 0,
                        //             "green": 183,
                        //             "blue": 229
                        //       }
                        // ];

                        // var colors = [
                        //       {
                        //             "red": 131,
                        //             "green": 0,
                        //             "blue": 255
                        //       },
                        //       {
                        //             "red": 25,
                        //             "green": 182,
                        //             "blue": 255
                        //       }
                        // ];

                        right.appendChild(generate_rating_buttons(key));

                        post_main.appendChild(left);
                        post_main.appendChild(right);
                        posts.appendChild(post_main);
                  }
            );

            update_post_ratings();
      }
);
