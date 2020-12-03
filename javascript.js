// script to show navbar on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-banner").style.top = "0";
    document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("nav-banner").style.top = "-120px";
    document.getElementById("footer").style.bottom = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

// fade in text on document load


$( document ).ready(function(){

    $('.fade-in').animate({opacity: '100'}, "slow");

});



