$(document).ready(function() {
  $(".club-link").click(function() {
    console.log("done1");

    $(".dashboard-view").load("club.html");
  });

  $(".player-link").click(function() {
    console.log("done2");
    $(".dashboard-view").load("players.html");
  });

  $(".matches-link").click(function() {
    console.log("done3");
    $(".dashboard-view").load("matches.html");
  });
});
