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

  // Mail Forms
  // ------------------
  // Contact Form on homepage
  $( ".home-contact-container, .offers-contact-container" ).submit(function( event ) {
    event.preventDefault();
    var vorname = $("[name='vorname']").val();
    var nachname = $("[name='nachname']").val();
    var email = $("[name='email']").val();
    var interests = $.map($(':checkbox[name=interests\\[\\]]:checked'), function(n, i){
      return n.value;
    }).join(',');
    var message = $("[name='message']").val() + "<br><br>\n\r";
    var firma = $("[name='firma']").val();
    var telefon = $("[name='phone']").val();
    var strasse = $("[name='adresse']").val();
    var plz = $("[name='plz']").val();
    var ort = $("[name='ort']").val();

    message += "<br><br>\n\rfields:<br>\n\r";
    // add all fields also to the message
    $(":input").each(function(){
      var name = $(this).attr('name')
      var value = $(this).val();
      message += name + ": " + value + "<br>\n\r";
    });

    $.post( "backend.php", {
      vorname: vorname,
      nachname: nachname,
      email: email,
      interests: interests,
      message: message,
      firma: firma,
      telefon: telefon,
      strasse: strasse,
      plz: plz,
      ort: ort } );

    $('<iframe>', {
      src: 'https://app.hatchbuck.com/onlineForm/submit.php?formID=60964925647&enableServerValidation=0&enable303Redirect=1&q1_firstName1='+vorname+'&q3_lastName3='+nachname+'&q4_email='+email+'&q6_interessen='+interests+'&q5_nachricht='+message+'&q7_firma='+firma+'&q8_telefon[phone]='+telefon+'&q9_adresse[addr_line1]='+strasse+'&q9_adresse[city]='+ort+'&q9_adresse[postal]='+plz+'&q9_adresse[country]=Switzerland',
      id: 'crmframe',
      frameborder: 0,
      height: 0,
      width: 0,
      style: 'position: absolute; left: -5000px;',
      tabindex: -1,
//        sandbox: 'allow-forms allow-scripts allow-same-origin',
//        the CRM redirects the main window (window.top) and uses that to track success. sandboxing the iframe prevents this, but also prevents the CRM to accept the submission :(
    }).appendTo('body').load(function(){
      sendProgressButton('check');
//        var url = 'https://app.hatchbuck.com/TrackOnlineForm?sid=326172713212511452';
//        if ($('#crmframe').attr('src') != url) {
//          // trying to manually do the redirect that was prevented with the sandboxing above
//          $('#crmframe').attr('src',url);
//        }
    });
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
