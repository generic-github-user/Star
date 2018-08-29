var database = firebase.database();

const new_post = function () {
      document.querySelector("#new-post-panel").className = "visible";
}

const view_post = function () {
      window.alert("This featured has not yet been added - please check back later.");
}

const publish_post = function () {
      var title = document.querySelector("#new-post-title-input").value;
      if (title || title != "") {
            var note = document.querySelector("#new-post-note-input").value;

            var user_id = firebase.auth().currentUser.uid;
            var key = firebase.database().ref().child('posts').push().key;
            database.ref("posts/" + key).set({
                  "user_id": user_id,
                  "title": title,
                  "note": note
            });
            document.querySelector("#new-post-panel").className = "";

            var snackbar_container = document.querySelector("#new-post-snackbar");
            var data = {
                  "message": "Post created.",
                  "timeout": 5000,
                  "actionHandler": view_post,
                  "actionText": "View"
            };
            snackbar_container.MaterialSnackbar.showSnackbar(data);
      }
      else {
            var dialog = document.querySelector('dialog');
            // if (! dialog.showModal) {
            //       dialogPolyfill.registerDialog(dialog);
            // }
            dialog.showModal();
            
            dialog.querySelector(".close").addEventListener("click", function() {
                  dialog.close();
            });
      }
}
