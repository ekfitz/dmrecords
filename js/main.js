window.addEventListener("resize", setMobile);

var hugePic = document.getElementById("hugePic");
hugePic.src = "images/drums crop.png";
function setMobile() {
  var w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  if (w > 800) {
    // set desktop
    $(".headerbox").css('backgroundColor', 'black');
  } else {
    // set mobile
    $(".headerbox").css('backgroundColor', 'blue');

  }
}
