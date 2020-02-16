$(document).ready(() => {
  var clubOpen = false;
  var playerOpen = false;
  var matchOpen = false;
  $(".uk-offcanvas-bar ul").slideUp();
  $("#slide1").click(function() {
    if (clubOpen == false) {
      $(this).css("transform", "rotate(180deg)");
      $(".uk-offcanvas-bar .club ul").slideDown();
      clubOpen = true;
    } else {
      if (clubOpen == true) {
        $(this).css("transform", "rotate(360deg)");
        $(".uk-offcanvas-bar .club ul").slideUp();
        clubOpen = false;
      }
    }
  });

  $("#slide2").click(function() {
    if (playerOpen == false) {
      $(this).css("transform", "rotate(180deg)");
      $(".uk-offcanvas-bar .player ul").slideDown();
      playerOpen = true;
    } else {
      if (playerOpen == true) {
        $(this).css("transform", "rotate(360deg)");
        $(".uk-offcanvas-bar .player ul").slideUp();
        playerOpen = false;
      }
    }
  });

  $("#slide3").click(function() {
    if (matchOpen == false) {
      $(this).css("transform", "rotate(180deg)");
      $(".uk-offcanvas-bar .match ul").slideDown();
      matchOpen = true;
    } else {
      if (matchOpen == true) {
        $(this).css("transform", "rotate(360deg)");
        $(".uk-offcanvas-bar .match ul").slideUp();
        matchOpen = false;
      }
    }
  });
});
