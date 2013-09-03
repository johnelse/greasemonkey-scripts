// ==UserScript==
// @name          Hide XenRT comments
// @description   Hide XenRT autofile "seen again" comments in Jira
// @include       https://jira.uk.xensource.com/*
// ==/UserScript==

function hide_seen_agains() {
  var divs = document.getElementsByClassName("issue-data-block")
  for (var i = 0; i < divs.length; i++) {
    var contents = divs[i].innerHTML;
    if (contents.indexOf("XenRT autofile") != -1) {
      divs[i].innerHTML = "";
    };
  };
}

window.addEventListener("load", function(e) {
  hide_seen_agains()
}, false);
