// script to show navbar and footer on scroll up

document.onwheel = function(event){

  var x = window.matchMedia("(max-width: 800px)")

  if (x.matches) { // If media query less than or equal to 800
    
    // show
    document.getElementById("nav-banner").style.top = "0";
    document.getElementById("footer").style.bottom = "0";
  } else {
    // show hide nav bar on screens bigger than 800px
    if (event.deltaY < 0) {
    // show
    document.getElementById("nav-banner").style.top = "0";
    document.getElementById("footer").style.bottom = "0";
    }
    else {
    // hide
    document.getElementById("nav-banner").style.top = "-120px";
    document.getElementById("footer").style.bottom = "-90px";
    }
  }

};

$( document ).ready(function(){
  
  // fade in text on document load
  $('.fade-in').animate({opacity: '100'}, "slow");

  // show and hide navbar links
  $("#nav-button").on("click", function(event){
    event.preventDefault();
    $(".nav-content").toggleClass("show-links");
  })
  
});





