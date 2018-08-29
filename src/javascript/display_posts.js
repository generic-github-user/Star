firebase.database().ref("posts").on("value",  function (post_data) {
      var posts = document.body.querySelector("#post-container");
      posts.innerHTML = "";

      Object.keys(post_data.val()).forEach(
            (key) => {
                  var post = post_data.val()[key];

                  var post_main = document.createElement("div");
                  post_main.className = "post";

                  var post_title = document.createElement("h3");
                  post_title.innerHTML = post.title;
                  post_main.appendChild(post_title);

                  if (post.note) {
                        var post_note = document.createElement("h5");
                        post_note.innerHTML = post.note;
                        post_main.appendChild(document.createElement("br"));
                        post_main.appendChild(document.createElement("br"));
                        post_main.appendChild(post_note);
                  }

                  posts.appendChild(post_main);
            }
      );
});
