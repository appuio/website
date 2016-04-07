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

  // Animate to scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

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

  // Mail
  $( "#contact-form" ).submit(function( event ) {
    event.preventDefault();
    var valid = true;
    var vorname = $("[name='vorname']").val();
    var name = $("[name='name']").val();
    var email = $("[name='email']").val();
    var interests = $.map($(':checkbox[name=interests\\[\\]]:checked'), function(n, i){
      return n.value;
    }).join(',');
    var message = $("[name='message']").val();
    if(!vorname) valid = false;
    if(!name) valid = false;
    if(!email || !email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) valid = false;
    if(!message) valid = false;
    if(valid) {
      jQuery.ajax({
        url: "email.php",
        data:'vorname='+vorname+'&name='+name+'&email='+email+'&interests='+interests+'&message='+message,
        type: "POST",
        success:function(){
          sendProgressButton('check');
        },
        error:function (){
          sendProgressButton('exclamation');
        }
      });
    }
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