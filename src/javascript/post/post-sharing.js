<<<<<<< HEAD
$(() => $("body").append($("<div></div>").load(window.location.origin + "/src/html/includes/dialogs/share-post.html")));
=======
$(() => $("body").append($("<div></div>").load("includes/dialogs/share-post.html")));
>>>>>>> parent of 5a8e973... Added pages HTML directory

const share_post = function(post_title, post_id) {
      var share_post_dialog = $("#share-post-dialog");
      // if (! dialog.showModal) {
      //       dialogPolyfill.registerDialog(dialog);
      // }
      share_post_dialog.find(".title").html("Share Post<br />" + post_title);
      share_post_dialog.find("input").attr("value", "https://example.com/post.html?id=" + post_id);

      share_post_dialog[0].showModal();
      share_post_dialog.find(".close").click(function() {
            share_post_dialog[0].close();
      });
}

const show_share_post = function(post_title, post_id, type) {
      var share_post_icon = $("<button></button>");
      share_post_icon.addClass("mdl-button mdl-js-button mdl-button--icon mdl-button--colored");
      share_post_icon.attr("onclick", "share_post('" + post_title + "', '" + post_id + "')");
      share_post_icon.append('<i class="material-icons">share</i>');

      var share_post_icon_tooltip = $("<div></div>");
      share_post_icon_tooltip.addClass("mdl-tooltip share-tooltip");
      share_post_icon_tooltip.text('Share "' + post_title + '"');

      if (type == "single") {
            var id = "share";
      } else if (type == "list") {
            var id = "share-" + post_id;
      }
      share_post_icon.attr("id", id);
      share_post_icon_tooltip.attr("data-mdl-for", id);

      var share_post_container = $("<div></div>");
      share_post_container.addClass("post-sharing-icon");
      share_post_container.append(share_post_icon);
      share_post_container.append(share_post_icon_tooltip);

      return share_post_container;
}