// window.js

function windowInit(name){
  // Window Event handlers
  window.onscroll = scrolling;
  $(window).resize(resizing);

  // Highlight current nav link
  $("#"+name).removeClass("mynavlink")
  $("#"+name).addClass("disabled-link")

  // Must call initially:
  resizing();
}

function resizing(){
  var w = $(window).width();
  var rhide = 0;
  var lhide = 0;
  if( w < 1280 ){
    rhide = 1280-w;
  }
  if( w < 900 ){
    lhide = 900-w;
  }
  $("body").css('background-position',
    'center top,'+(-rhide)+'px 100%, '+(w+lhide-150)+'px 20%');
}

function scrolling(){
  // if scrolled past the sticky bit, give it an underline
  if($(".sticky").offset().top <= window.pageYOffset){
    $("#nav").addClass("underlined");
  }else{
    $("#nav").removeClass("underlined");
  }
}

// end window.js
