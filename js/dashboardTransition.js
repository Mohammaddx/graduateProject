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
  $(".laws-link").click(function() {
    $(".dashboard-view").load("law.html");
  });

  $(".note-link").click(function() {
    $(".dashboard-view").load("notification.html");
  });

  $(".jug-link").click(function() {
    $(".dashboard-view").load("judgment.html");
  });
  $(".buy-link").click(function() {
    $(".dashboard-view").load("");
  });
});
