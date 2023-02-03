$(".mainContact button").click(function () {
  $(".sideBar").css("left", "0");
  $(".mainContact").css("margin-left", "20%");
  $(".mainContact h2").css("margin-left", "0");
  $(".mainContact p").css("margin-left", "0");
});
$(".sideBar button").click(function () {
  $(".sideBar").css("left", "-307.2px");
  $(".mainContact").css("margin-left", "0");
  $(".mainContact h2").css("margin-left", "24%");
  $(".mainContact p").css("margin-left", "24%");
});

$(document).ready(function () {
  $("#Details div:nth-child(2)").css("display", "block");
  $("#Details h3").click(function () {
    $(this).next().slideToggle(500);
    $("#Details div").not($(this).next()).slideUp(500);
  });
});

$(".myrem").keyup(function () {
  var max = 100;
  var L = $(this).val().length;
  var remaning = max - L;
  if (remaning < 0) {
    $("#remaning").html("your available character finished");
  } else {
    $("#remaning").html(remaning);
  }
});

$(".menu-item").click(function () {
  $(".sub-menu").fadeIn();
});





