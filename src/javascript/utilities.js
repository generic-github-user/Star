// utilities.js
// Miscellaneous utility functions

// Get variable from URL in format [https://example.com?var="value"]
// Several variables can be stored in one URL: https://www.google.com/search?q=is+there+sawdust+in+parmesan+cheese&oq=is+there+sawdust+in+cheese&aqs=chrome
// https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable (variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i = 0; i < vars.length; i ++) {
               var pair = vars[i].split("=");
               if (pair[0] == variable) {return pair[1];}
       }
       return(false);
}
