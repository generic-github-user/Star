document.addEventListener("DOMContentLoaded", function () {
      document.body.innerHTML += '\
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
      ';
})

const share_post = function (post_title, post_id) {
      var share_post_dialog = document.querySelector("#share-post-dialog");
      // if (! dialog.showModal) {
      //       dialogPolyfill.registerDialog(dialog);
      // }
      share_post_dialog.querySelector(".title").innerHTML = "Share Post<br />" + post_title;
      share_post_dialog.querySelector("input").value = "https://example.com/post.html?id=" + post_id;

      share_post_dialog.showModal();
      share_post_dialog.querySelector(".close").addEventListener("click", function() {
            share_post_dialog.close();
      });
}

const show_share_post = function (post_title, post_id, type) {
      var share_post_icon = document.createElement("button");
      share_post_icon.className = "mdl-button mdl-js-button mdl-button--icon mdl-button--colored post-sharing-icon";
      share_post_icon.setAttribute("onclick", "share_post('" + post_title + "', '" + post_id + "')");
      share_post_icon.innerHTML += '<i class="material-icons">share</i>';

      var share_post_icon_tooltip = document.createElement("div");
      share_post_icon_tooltip.className = "mdl-tooltip share-tooltip";
      share_post_icon_tooltip.innerHTML = 'Share "' + post_title + '"';

      if (type == "single") {
            share_post_icon.id = "share";
            share_post_icon_tooltip.setAttribute("data-mdl-for", "share");
      }
      else if (type == "list") {
            share_post_icon.id = "share-" + post_id;
            share_post_icon_tooltip.setAttribute("data-mdl-for", "share-" + post_id);
      }

      var share_post_container = document.createElement("div");
      share_post_container.appendChild(share_post_icon);
      share_post_container.appendChild(share_post_icon_tooltip);

      return share_post_container;
}
