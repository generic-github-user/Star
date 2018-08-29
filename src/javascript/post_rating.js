const rate_post = function (post_id, rating) {
      var user_id = firebase.auth().currentUser.uid;
      database.ref("posts/" + post_id + "/ratings/" + user_id).set({
            "rating": rating
      });
}

const update_post_ratings = function () {
      // Wait for current user info to load - if user changes, reload information
      firebase.auth().onAuthStateChanged(
            function (user) {
                  // Get list of all posts
                  database.ref("posts").once(
                        "value",
                        function (data) {
                              var posts = data.val();
                              // Loop through all posts
                              Object.keys(posts).forEach(
                                    (key) => {
                                          // Get post from post key
                                          var post = posts[key];
                                          // Listen for changes in current user's rating of post
                                          database.ref("posts/" + key + "/ratings/" + user.uid).on("value", function (rating) {
                                                document.querySelector("#post-" + key)
                                                .querySelectorAll(".post-rating-button")
                                                .forEach(
                                                      button => button.style.borderRadius = ""
                                                );

                                                if (rating.val()) {
                                                      document.querySelector("#post-" + key)
                                                      .querySelector("#button-" + rating.val().rating)
                                                      .style.borderRadius = "100%";
                                                }
                                          });
                                    }
                              );
                        }
                  );
            }
      );
}
