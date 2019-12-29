// window.js

function windowInit(name){
  // Window Event handlers
  window.onscroll = scrolling;
  $(window).resize(resizing);

  // Highlight current nav link
  $("#"+name).addClass("active")

  // Must call initially:
  resizing();
}

function resizing(){
  var w = $(window).width();
  if( w > 1000 ){
    var rhide = 0;
    var lhide = 0;
    if( w < 1300 ){
      rhide = 1300-w;
    }
    if( w < 900 ){
      lhide = 900-w;
    }
    $("body").addClass("leaves")
      .css('background-position',
        (-rhide)+'px 100%, '+(w+lhide-150)+'px 20%');
  }else{
    $("body").removeClass("leaves");
  }
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
