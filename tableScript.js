$(function() {
  $('#modSelect').change(function() {
    $('div.gas').toggleClass("hidden");
    $('div.diesel').toggleClass("hidden");
  });
});
