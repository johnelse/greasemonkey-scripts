// ==UserScript==
// @name          Hide Redmine maintenance banner
// @description   Hide the yellow "Redmine will be down..." banner in Redmine
// @include       https://redmine.*.com/*
// ==/UserScript==

function hide_banner() {
  var divs = document.querySelectorAll("div#maintenance_mode_banner");

  for (var i = 0; i < divs.length; i++) {
    divs[i].style.visibility = 'hidden';
  }
}

window.addEventListener("load", function(e) {
  hide_banner()
}, false);
