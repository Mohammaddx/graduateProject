$(document).ready(function() {
  $(".club-link").click(function() {
    $(".dashboard-view").load("club.html");
  });

  $(".player-link").click(function() {
    $(".dashboard-view").load("players.html");
  });

  $(".matches-link").click(function() {
    $(".dashboard-view").load("matches.html");
  });
});
