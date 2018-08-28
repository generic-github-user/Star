var database = firebase.database();

const new_post = function () {

}

const view_post = function () {
      window.alert("This featured has not yet been added - please check back later.");
}

const publish_post = function () {
      var user_id = firebase.auth().currentUser.uid;
      var key = firebase.database().ref().child('posts').push().key;
      database.ref("posts/" + key).set({
            "user_id": user_id,
            "title": "Title"
      });

      var snackbar_container = document.querySelector("#new-post-snackbar");
      var data = {
            "message": "Post created.",
            "timeout": 5000,
            "actionHandler": view_post,
            "actionText": "View"
      };
      snackbar_container.MaterialSnackbar.showSnackbar(data);
}
