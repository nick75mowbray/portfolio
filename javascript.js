// script to show navbar and footer on scroll up

document.onwheel = function(event){

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
};

$( document ).ready(function(){
  
  // fade in text on document load
  $('.fade-in').animate({opacity: '100'}, "slow");
  
});


  // show and hide nav on mobile
  $( document ).on("swipe",function(){
    alert("swipedown");
  });
  $('.jumbotron').on('swipe',function(){
    alert("swipeup..");
  });



