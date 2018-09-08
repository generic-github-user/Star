// create_post.js
// Functions for creating a new Star post

// Get dialog element and store it in a variable
var dialog = $("dialog");
// Display dialog polyfill for older browsers that do not support the experimental HTML <dialog> element
// if (! dialog.showModal) {
//       dialogPolyfill.registerDialog(dialog);
// }
// Add event listener to dialog box close button
dialog.find(".close").click(function() {
      // Close dialog box
      dialog[0].close();
});

// Open new post window to create a new post
const new_post = function () {
      // Reset title text field
      var title = $("#new-post-title-input");
      // Clear contents of text field
      title.attr("value", "");
      // Remove the .is-dirty MDL class that marks user input
      title.removeClass("is-dirty");

      // Reset note text field
      var note = $("#new-post-note-input");
      note.attr("value", "");
      note.removeClass("is-dirty");

      // Display new post settings panel
      $("#new-post-panel").toggleClass("visible");
}

// View post just created by the user (not currently supported)
const view_post = function (post_id) {
      window.location.href = "post.html?id=" + post_id;
}

// Publish a post and store information in database
const publish_post = function () {
      // Get title from title text box
      var title = $("#new-post-title-input").val();
      // Confirm that user has entered a title into the title text field
      if (title || title != "") {
            // Get note text from note field
            var note = $("#new-post-note-input").attr("value");

            var user_id = firebase.auth().currentUser.uid;
            var key = firebase.database().ref().child('posts').push().key;
            var post_info = {
                  "user_id": user_id,
                  "title": title,
                  "note": note,
                  "num_ratings": 0,
                  "created": Date.now()
            };
            database.ref("posts/" + key).set(post_info);
            $("#new-post-panel").toggleClass("visible");

            var snackbar_container = $("#new-post-snackbar");
            var snackbar_config = {
                  "message": "Post created.",
                  // Message lasts for 5 seconds (5,000 milliseconds)
                  "timeout": 5000,
                  // Call view_post function when "View" link is clicked
                  "actionHandler": () => view_post(key),
                  "actionText": "View"
            };
            // Display snackbar notification with config information object
            snackbar_container[0].MaterialSnackbar.showSnackbar(snackbar_config);
      }
      //
      else {
            // Display dialog box
            dialog[0].showModal();
      }
}
