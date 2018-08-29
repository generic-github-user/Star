firebase.database().ref("posts").on("value",  function (post_data) {
      var posts = document.body.querySelector("#post-container");
      posts.innerHTML = "";

      Object.keys(post_data.val()).forEach(
            (key) => {
                  var post = post_data.val()[key];

                  var post_html = "\
                        <div class='post'>\n\
                              <h2>\n\
                              " + post.title + "\n\
                              </h2>\n\
                        </div>\n\
                  ";
                  posts.innerHTML += post_html;
            }
      );
});
