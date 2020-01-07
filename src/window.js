// window.js

function windowInit(name){
  // Window Event handlers
  window.onscroll = scrolling;
  $(window).resize(updateBgImages);

  // Highlight current nav link
  $("#"+name).removeClass("mynavlink")
  $("#"+name).addClass("disabled-link")

  // Must call initially:
  updateBgImages();
}

function updateBgImages(){
  var w = $(window).width();
  var rhide = 0;
  var lhide = 0;
  if( w < 1280 ){
    rhide = 1280-w;
  }
  if( w < 900 ){
    lhide = 900-w;
  }
  var thide = -window.pageYOffset;
  if( w < 700 ){
	  thide += (700-w)/20;
  }
  $("body").css('background-position',
    'center '+(thide)+'px,'+(-rhide)+'px 100%, '+(w+lhide-150)+'px 20%');
}

function scrolling(){
  // if scrolled past the sticky bit, give it an underline
  if($(".sticky").offset().top <= window.pageYOffset){
    $("#nav").addClass("underlined");
  }else{
    $("#nav").removeClass("underlined");
  }
  // scroll the top background image
  updateBgImages();
}

// end window.js
