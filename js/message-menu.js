$(document).ready(function() {
  var isOpen = true;
  $(".massages-page header nav .menu").click(function() {
    console.log("hiu");

    if (isOpen == true) {
      console.log("true");
      $(" .left-side").css("margin-left", "-300px");
      isOpen = false;
    } else if (isOpen == false) {
      $(".left-side").css("margin-left", "0");
      isOpen = true;
    }
  });
});
