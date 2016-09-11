;( function( window ) {

  'use strict';

  // Collapse
  $("[data-collapse]").click(function(event) {
    event.preventDefault();
    var target = $(event.currentTarget).attr('data-collapse');
    target = $('#'+target);
    if (target.length) {
      target.toggleClass('is-expanded');
    }
  });

  // Enable Button when Terms are checked
  var checkboxes = $("input[name='terms']"),
      submitButt = $("input[type='submit']");

  checkboxes.click(function() {
    submitButt.attr("disabled", !checkboxes.is(":checked"));
  });

  // Animate to scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var headerHeight = $('.header-container').outerHeight();
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      console.log(headerHeight);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 1000);
        return false;
      }
    }
  });

if (window.location.pathname === '/') {
  $('#nav-header').find('a').filter('[href^="./#"]').each(function(i, el) {
    el.href = $(el).attr('href').slice(2)
  })
}

$('body').scrollspy({ target: '#nav-header', offset: 100 })
// // Change active class on scroll
//   $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         //$('nav').addClass('fixed');
//         $('main section').each(function(i) {
//             console.log(windscroll, this, $(this).offset().top)
//             if ($(this).offset().top <= windscroll - 20) {
//                 console.log("true");
//                 $('nav a.active').removeClass('active');
//                 $('nav a').eq(i).addClass('active');
//             }
//         });
//     } else {
//         //$('nav').removeClass('fixed');
//         $('nav a.active').removeClass('active');
//         $('nav a:first').addClass('active');
//     }
//
// }).scroll();

  // Checkboxes
  $("[data-check]").click(function(event) {
    var value = $(event.currentTarget).attr('data-check');
    var target = $('#'+value);
    if (target.length) {
      $('.interest-checkbox').prop("checked", false);
      target.prop("checked", true);
    }
  });
  $('.interest-checkbox').click(function(event) {
    var areChecked = $("input[name='interests[]']:checked");
    if(areChecked.length <= 0) $('#interest-info').prop("checked", true);
  });

  var sendProgressButton = function(status){
    $(".home-contact-button").addClass("is-loading")
    $(".home-contact-button").delay(2000).queue(function() {
      $(this).append('<span class="button-progress-feedback"><div class="icon icon--ei-'+status+' icon--m "><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ei-'+status+'-icon"></use></svg></div></span>');
      $(this).addClass('is-'+status).dequeue();
    });
    resetProgressButton();
  }
  var resetProgressButton = function(){
    $(".home-contact-button").delay(4000).queue(function() {
      $(".button-progress-feedback").remove();
      $(this).removeClass("is-check").removeClass("is-exclamation").removeClass("is-loading").dequeue();
    });
  }

})( window );
