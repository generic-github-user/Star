firebase.database().ref("posts").on("value",  function (post_data) {
      var posts = document.body.querySelector("#post-container");
      posts.innerHTML = "";

      Object.keys(post_data.val()).forEach(
            (key) => {
                  var post = post_data.val()[key];

                  var post_main = document.createElement("div");
                  post_main.className = "post";
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
                        button.onclick = "";

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
});
