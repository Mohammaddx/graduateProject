$(document).ready(function() {
  let isOpen = true;
  $(".massages-page header nav .menu").click(function() {
    console.log("hiu");

    if (isOpen == true) {
      console.log("true");
      $(" .left-side").css("margin-left", "-300px");
      $(".right-side").css("width", "100%");
      $(".write").css("width", "100%");
      $(".write").css("left", "0");
      isOpen = false;
    } else if (isOpen == false) {
      $(".left-side").css("margin-left", "0");
      $(".right-side").css("width", "75%");
      $(".write").css("width", "75%");
      $(".write").css("left", "300px");
      isOpen = true;
    }
  });
});
