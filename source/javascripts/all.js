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
  $( "#contact-form" ).submit(function( event ) {
    event.preventDefault();
    var valid = true;
    var vorname = $("[name='vorname']").val();
    var nachname = $("[name='nachname']").val();
    var email = $("[name='email']").val();
    var interests = $.map($(':checkbox[name=interests\\[\\]]:checked'), function(n, i){
      return n.value;
    }).join(',');
    var message = $("[name='message']").val();
    if(!vorname) valid = false;
    if(!nachname) valid = false;
    if(!email || !email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) valid = false;
    if(!message) valid = false;
    if(valid) {
      $('<iframe>', {
        src: 'https://app.hatchbuck.com/onlineForm/submit.php?formID=60964925647&enableServerValidation=0&enable303Redirect=1&q1_firstName1='+vorname+'&q3_lastName3='+nachname+'&q4_email='+email+'&q6_interessen='+interests+'&q5_nachricht='+message,
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
    }
  });

// Contact form for managed private paas
$( "#offer-one-contact-form" ).submit(function( event ) {
  event.preventDefault();
  var valid = true;

  var vorname = $("[name='vorname']").val();
  if(!vorname) valid = false;

  var nachname = $("[name='nachname']").val();
  if(!nachname) valid = false;

  var email = $("[name='email']").val();
  if(!email || !email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) valid = false;

  var phone = $("[name='phone']").val();
  if(!phone) valid = false;

  var message = $("[name='message']").val();
  if(!message) valid = false;

  var firma = $("[name='firma']").val() || '';

  var interests = $.map($(':checkbox[name=interests\\[\\]]:checked'), function(n, i){
    return n.value;
  }).join(',');
  // var addresse = $("[name='addresse']").val() || '';
  // var rechnungsadresse = $("[name='rechnungsadresse']").val() || '';

  if(valid) {
    $('<iframe>', {
      src: 'https://app.hatchbuck.com/onlineForm/submit.php?formID=60964925647&enableServerValidation=0&enable303Redirect=1&q1_firstName1='+vorname+'&q3_lastName3='+nachname+'&q4_email='+email+'&q6_interessen='+interests+'&q5_nachricht='+message,
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
  }
});

// Contact form for public paas
$( "#offer-two-contact-form" ).submit(function( event ) {
  event.preventDefault();
  var valid = true;

  var vorname = $("[name='vorname']").val();
  if(!vorname) valid = false;

  var nachname = $("[name='nachname']").val();
  if(!nachname) valid = false;

  var email = $("[name='email']").val();
  if(!email || !email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) valid = false;

  var phone = $("[name='phone']").val();
  if(!phone) valid = false;

  var message = $("[name='message']").val();
  if(!message) valid = false;

  // var firma = $("[name='firma']").val() || '';
  var addresse = $("[name='addresse']").val() || '';
  var plz_ort = $("[name='plz_ort']").val() || '';

  var rechnungsadresse = $("[name='rechnungsadresse']").val() || '';
  var rechnungsadresse_ort = $("[name='rechnungsadresse']").val() || '';

  var billing = $.map($(':radio[name=billing\\[\\]]:checked'), function(n, i){
    return n.value;
  }).join(',');

  if(valid) {
    $('<iframe>', {
      src: 'https://app.hatchbuck.com/onlineForm/submit.php?formID=60964925647&enableServerValidation=0&enable303Redirect=1&q1_firstName1='+vorname+'&q3_lastName3='+nachname+'&q4_email='+email+'&q6_interessen='+interests+'&q5_nachricht='+message,
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
  }
});

// Contact Form for on premises paas
  $( "#offer-three-contact-form" ).submit(function( event ) {
    event.preventDefault();
    var valid = true;

    var vorname = $("[name='vorname']").val();
    if(!vorname) valid = false;

    var nachname = $("[name='nachname']").val();
    if(!nachname) valid = false;

    var email = $("[name='email']").val();
    if(!email || !email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) valid = false;

    var phone = $("[name='phone']").val();
    if(!phone) valid = false;

    var message = $("[name='message']").val();
    if(!message) valid = false;

    var firma = $("[name='firma']").val() || '';
    var addresse = $("[name='addresse']").val() || '';
    var rechnungsadresse = $("[name='rechnungsadresse']").val() || '';

    if(valid) {
      $('<iframe>', {
        src: 'https://app.hatchbuck.com/onlineForm/submit.php?formID=60964925647&enableServerValidation=0&enable303Redirect=1&q1_firstName1='+vorname+'&q3_lastName3='+nachname+'&q4_email='+email+'&q6_interessen='+interests+'&q5_nachricht='+message,
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
