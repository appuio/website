// Enable Submit button when terms and an offer is checked
var checkboxes = $("input[name='terms']"),
  submitButton = $("#submitButton");

$("#submitEmail").click(function (e) {
  e.preventDefault();
  document.getElementById("emailInput").value = "";
});

checkboxes.click(function () {
  submitButton.attr("disabled", !checkboxes.is(":checked"));
});

// Animate to scroll
$('a[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    var headerHeight = $('header nav').outerHeight();
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - headerHeight
        }, 1000);
        return false;
    }
  }
});

// beer button
$('#beer-button').click(function(e) {
  e.preventDefault();
  $('.beer-dialog').show();
});
$('#beer-dialog .close').click(function(e) {
  e.preventDefault();
  $('.beer-dialog').hide();
});