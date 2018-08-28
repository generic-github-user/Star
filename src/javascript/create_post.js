var database = firebase.database();

const new_post = function () {

}

const publish_post = function () {
      var user_id = firebase.auth().currentUser.uid;
      var key = firebase.database().ref().child('posts').push().key;
      database.ref("posts/" + key).set({
            "user_id": user_id,
            "title": "Title"
      });
}
