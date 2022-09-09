$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#header").addClass("fixed-top");
  } else {
    $("#header").removeClass("fixed-top");
  }
});

AOS.init();
