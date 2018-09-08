$(function () {
      $("body").append('\
            <dialog class="mdl-dialog" id="share-post-dialog">\
                  <h4 class="mdl-dialog__title title">Share Post</h4>\
                  <div class="mdl-dialog__content">\
                        <p>\
                              Copy the link below.\
                        </p>\
                        <div class="mdl-textfield mdl-js-textfield share-post-link-field">\
                              <input class="mdl-textfield__input" type="text" id="sample1" spellcheck="false">\
                              <label class="mdl-textfield__label" for="sample1"></label>\
                        </div>\
                  </div>\
                  <div class="mdl-dialog__actions">\
                        <button type="button" class="mdl-button mdl-js-button mdl-js-ripple-effect\ close">Done</button>\
                  </div>\
            </dialog>\
      ');
})

const share_post = function (post_title, post_id) {
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

const show_share_post = function (post_title, post_id, type) {
      var share_post_icon = $("<button></button>");
      share_post_icon.addClass("mdl-button mdl-js-button mdl-button--icon mdl-button--colored");
      share_post_icon.attr("onclick", "share_post('" + post_title + "', '" + post_id + "')");
      share_post_icon.append('<i class="material-icons">share</i>');

      var share_post_icon_tooltip = $("<div></div>");
      share_post_icon_tooltip.addClass("mdl-tooltip share-tooltip");
      share_post_icon_tooltip.text('Share "' + post_title + '"');

      if (type == "single") {
            var id = "share";
      }
      else if (type == "list") {
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
