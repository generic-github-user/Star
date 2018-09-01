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
]

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

                        var post_title = document.createElement("h3");
                        post_title.innerHTML = post.title;
                        left.appendChild(post_title);

                        if (post.note) {
                              var post_note = document.createElement("h5");
                              post_note.innerHTML = post.note;
                              left.appendChild(post_note);
                        }

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

                        if (post.created) {
                              var post_created = document.createElement("p");
                              post_created.innerHTML = date + " - " + time;
                              left.appendChild(post_created);
                        }

                        if (post.num_ratings !== undefined) {
                              var post_ratings = document.createElement("p");
                              if (post.num_ratings == 1) {
                                    post_ratings.innerHTML = post.num_ratings + " vote";
                              }
                              else {
                                    post_ratings.innerHTML = post.num_ratings + " votes";
                              }
                              left.appendChild(post_ratings);
                        }

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

                        var colors = [
                              {
                                    "red": 24,
                                    "green": 93,
                                    "blue": 204
                              },
                              {
                                    "red": 0,
                                    "green": 255,
                                    "blue": 0
                              }
                        ];

                        for (var i = 0; i < 5; i ++) {
                              button = document.createElement("button");
                              var factor = i / 5;
                              var color = "rgba("
                                     + ((colors[1].red * factor) + (colors[0].red * (1 - factor))) + ", "
                                     + ((colors[1].green * factor) + (colors[0].green * (1 - factor))) + ", "
                                     + ((colors[1].blue * factor) + (colors[0].blue * (1 - factor))) + ", "
                                    + "1)";
                              button.style = "background-color: " + color + " !important; filter: brightness(1"
                              button.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored post-rating-button";
                              button.id = "button-" + (i * 25);
                              // addEventListener cannot be used
                              button.setAttribute("onclick", "rate_post('" + key + "', " + (i * 25) + ");");

                              if (i == 0) {
                                    button.innerHTML += "<i class='material-icons'>remove</i>";
                              }
                              else if (i == 4) {
                                    button.innerHTML += "<i class='material-icons'>add</i>";
                              }

                              right.appendChild(button);
                        };

                        post_main.appendChild(left);
                        post_main.appendChild(right);
                        posts.appendChild(post_main);
                  }
            );

            update_post_ratings();
      }
);
