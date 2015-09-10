// ==UserScript==
// @name          Hide XenRT comments
// @description   Hide XenRT autofile "seen again" comments in Jira
// @include       https://jira.uk.xensource.com/*
// @include       https://issues.citrite.net/*
// ==/UserScript==

function hide_seen_agains() {
  // First unhide all the comments.
  var expandlink = document.querySelector("a.collapsed-comments");
  if (!(expandlink === null)) {
    expandlink.click();
  };

  // Then hide the ones we don't want (after waiting a short while for the
  // click() operation to happen).
  setTimeout(
    function() {
      var divs = document.querySelectorAll("div.activity-comment");
      console.log("found comments: " + divs.length);
      for (var i = 0; i < divs.length; i++) {
        if (divs[i]
                .querySelectorAll('p')[0]
                .innerHTML
                .lastIndexOf("Seen again on XenRT JobID:") >= 0) {
          console.log("hiding div " + i);
          divs[i].parentNode.removeChild(divs[i]);
        };
      };
    },
    3000);
}

window.addEventListener("load", function(e) {
  hide_seen_agains()
}, false);
