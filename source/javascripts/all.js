;(function (window) {

    'use strict';

    // Collapse
    $("[data-collapse]").click(function (event) {
        event.preventDefault();
        var target = $(event.currentTarget).attr('data-collapse');
        target = $(target);
        if (target.length) {
            target.toggleClass('is-expanded');
        }
    });

    // Expand blogpost if ancor is in url
    if (window.location.href.indexOf("blog") > -1 && window.location.hash) {
        var hash = window.location.hash.substring(1);
        var target = 'a[name="' + hash + '"]';
        console.log(target);
        $(target).parent().addClass('is-expanded');
        var nextTarget = $(target).parent().find('.news-details');
        nextTarget.show();
    }

    // Collapse
    $("[slide-toggle]").click(function (event) {
        event.preventDefault();
        var target = $(event.currentTarget).attr('slide-toggle');
        target = $(this).parent().parent().find(target);
        if (target.length) {
            target.slideToggle('fast');
            $(this).parent().parent().toggleClass('is-expanded');
        }
    });

// Enable Submit button when terms and an offer is checked
    var checkboxes = $("input[name='terms']"),
        submitButt = $("input[type='submit']");

    checkboxes.click(function () {
        submitButt.attr("disabled", !checkboxes.is(":checked"));
    });

// Jump to anchor and display message if no option was checked
    var radios = $('.interest-checkbox'),
        messageSelectOffer = $('#message-select-offer');

    submitButt.click(function () {
        const result = radios.filter(function (index, element) {
            return element.checked === true
        });
        if (result.length < submitButt.data("required-checkboxes")) {
            messageSelectOffer.removeClass("is-hidden");
            messageSelectOffer.addClass("is-displayed");
            $("html, body").animate({scrollTop: messageSelectOffer.offset().top - 90}, 0)
        } else {
            messageSelectOffer.removeClass("is-displayed");
            messageSelectOffer.addClass("is-hidden");
            $("html, body").animate({scrollTop: messageSelectOffer.offset().top - 100}, 0)
        }
    });

    // Animate to scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            var headerHeight = $('.header-container').outerHeight();
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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
        $('#nav-header').find('a').filter('[href^="./#"]').each(function (i, el) {
            el.href = $(el).attr('href').slice(2)
        })
    }

    $('body').scrollspy({target: '#nav-header', offset: 100})

    // Checkboxes
    $("[data-check]").click(function (event) {
        var value = $(event.currentTarget).attr('data-check');
        var target = $('#' + value);
        if (target.length) {
            $('.interest-checkbox').prop("checked", false);
            target.prop("checked", true);
        }
    });

    // Mail Forms
    // ------------------
    // Contact Form on homepage

    var submitText;

    $(".home-contact-container, .offers-contact-container").submit(function (event) {
        event.preventDefault();
        submitText = $("[type='submit']").val();
        var vorname = $("[name='vorname']").val();
        var nachname = $("[name='nachname']").val();
        var email = $("[name='email']").val();
        var interests = $.map($(':checkbox[name=interests\\[\\]]:checked'), function (n, i) {
            return n.value;
        }).join(',');
        var memory = $('[name="memory"]').val();
        var priceSource = $('[name="appuio-price-source"]:checked').val();
        var tags = $.map($(':checkbox[name=interests\\[\\]]:checked'), function (n, i) {
            return 'q6_interessen[]=' + n.value;
        }).join('&');
        var dedicated = $('[name="dedicated"]:checked').val();
        var messageform = $("[name='message']").val() + "<br><br>\n\r";
        var firma = $("[name='firma']").val();
        var telefon = $("[name='phone']").val();
        var strasse = $("[name='adresse']").val();
        var plz = $("[name='plz']").val();
        var ort = $("[name='ort']").val();
        var form = $('form').attr('name');

        var message = messageform + "<br><br>\n\r";
        message += 'memory: ' + memory + "<br><br>\n\r";
        message += 'dedicated: ' + dedicated + "<br><br>\n\r";
        message += 'zone: ' + priceSource + "<br><br>\n\r";
        message += "<br><br>\n\rDebugfields:<br>\n\r"
        // add all fields also to the message
        $(":input").each(function () {
            var name = $(this).attr('name')
            var value = $(this).val();

            if (name === 'dedicated') {
                return;
            }

            message += name + ": " + value + "<br>\n\r";
        });

        $('[type="submit"]', this).val(
            $(this).data('loadingMessage')
        );

        $('#submitButt').prop("disabled", true);
        var formOnly = $('form');

        $(".appuio-contact-button").addClass("is-loading");
        $.post("/backend.php", {
                form: form,
                vorname: vorname,
                nachname: nachname,
                email: email,
                interests: interests,
                priceSource: priceSource,
                memory: memory,
                message: messageform,
                dedicated: dedicated,
                messageback: message,
                firma: firma,
                telefon: telefon,
                strasse: strasse,
                plz: plz,
                ort: ort
            },
            function () {
                // Clear user input
                $(formOnly)[0].reset();
                submitButt.prop("disabled", true)
            }
        );
        $('<iframe>', {
            src: 'https://app.hatchbuck.com/onlineForm/submit.php?formID=63340310467&enableServerValidation=0&enable303Redirect=1&q1_firstName1=' + vorname + '&q3_lastName3=' + nachname + '&q4_email=' + email + '&' + tags + '&q7_nachricht=' + message + '&q8_company8=' + firma + '&q9_telefonnummer9[phone]=' + telefon + '&q10_adresse10[addr_line1]=' + strasse + '&q10_adresse10[city]=' + ort + '&q10_adresse10[postal]=' + plz + '&q10_adresse10[country]=Switzerland',
            id: 'crmframe',
            frameborder: 0,
            height: 0,
            width: 0,
            style: 'position: absolute; left: -5000px;',
            tabindex: -1,
        }).appendTo('body').load(function () {
            sendProgressButton('check');
        });
    });
    var sendProgressButton = function (status) {
        $(".appuio-contact-button").delay(2000).queue(function () {
            $(this).append('<span class="button-progress-feedback"><div class="icon icon--ei-' + status + ' icon--m "><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ei-' + status + '-icon"></use></svg></div></span>');
            $(this).addClass('is-' + status).dequeue();
            $(".home-feedback").text(
                $(this).closest('form').data('successMessage')
            );
        });
        resetProgressButton();
    }
    var resetProgressButton = function () {
        $(".appuio-contact-button").delay(4500).queue(function () {
            $(".button-progress-feedback").remove();
            $(".home-feedback").empty();
            $("input", this).val(submitText);
            $(this).removeClass("is-check is-exclamation is-loading").dequeue();
        });
    };

    // Partner carousels and settings
    $(".platinum-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });

    $(".gold-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".silver-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".dev-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".public-iaas-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".public-partner-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".managed-iaas-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".managed-partner-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".unmanaged-iaas-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".unmanaged-partner-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });

    $(".techlabs-feedback-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        center: true,
        responsiveClass: true,
        items: 1
    });

    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function (event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

    // Home Animation GSAP

    var triggerOffset = 0;
    var duration = 10;
    console.log("Duration: " + duration);

    var requestId = null;

    var tl = new TimelineMax({
        repeat: -1,
        yoyo: true
    });

    // var tlTwo = new TweenMax({
    //   repeat:-1,
    //   yoyo: true
    // });

    tl.staggerTo(".balloon", duration / 3, {
        rotation: -3,
        yoyo: true,
        transformOrigin: '0% 100%',
        repeat: -1,
        ease: Power1.easeInOut
    }, 0);

    tl.staggerTo(".ad_ons", duration / 3, {
        rotation: -2,
        x: -3,
        y: -4,
        yoyo: true,
        transformOrigin: '0% 100%',
        repeat: -1,
        ease: Power1.easeInOut
    }, 0);

    tl.staggerTo("#arm", duration / 3, {
        rotation: -3,
        yoyo: true,
        transformOrigin: '0% 100%',
        repeat: -1,
        ease: Power1.easeInOut
    }, 0);

    // tl.to("#sprechblase",duration/2,{
    //   scale:0,
    //   repeat:-1,
    //   yoyo:true
    // });

    tl.to("#clouds_right",
        duration * 2, {
            x: 340,
            y: 0
        }, 0);

    tl.to(".cls-93", duration * 2, {
        x: -250
    }, 0);
    tl.to("#ad_ons", duration, {
        x: -80,
        y: -40,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    }, 0);
    tl.to("#kran_container, #kran_haken", duration / 2, {
        y: -18,
        x: +20,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    }, 0);

    // // Only update on animation frames
    // window.addEventListener("scroll", function() {
    //   if (!requestId) {
    //     requestId = requestAnimationFrame(update);
    //   }
    // });
    //
    // update();
    //
    // // Set timeline time to scrollTop
    // function update() {
    //   console.log(window.pageYOffset);
    //   tl.time(window.pageYOffset + triggerOffset);
    //   requestId = null;
    // }


// Angebot Public Animation GSAP

    if ($('svg#angebot_public_image').length > 0) {

        var tlPublic = new TimelineMax({
            repeat: -1,
            yoyo: true
        });


        tlPublic.to("#container, #cloud-53", 3, {
            y: -5,
            x: -10,
            yoyo: true,
            ease: Power1.easeInOut,
            repeat: -1
        }, 2);

        tlPublic.to("#container-2", 3, {
                y: -10,
                x: -5,
                yoyo: true,
                ease: Power1.easeInOut,
                repeat: -1
            }, 2
        );

        tlPublic.to("#container", 3, {
                y: -5,
                yoyo: true,
                ease: Power1.easeInOut,
                repeat: -1
            }, 4
        );

        tlPublic.to("#container-2", 3, {
                y: -10,
                yoyo: true,
                ease: Power1.easeInOut,
                repeat: -1
            }, 0
        );

        tlPublic.to("#container-3", 6, {
            y: -10,
            x: 5,
            yoyo: true,
            ease: Power1.easeInOut,
            repeat: -1
        }, 2);
    }


    // Angebot Managed Animation GSAP
    if ($('svg#angebot_managed_image').length > 0) {

        var tlManaged = new TimelineMax({
            repeat: -1,
            yoyo: true
        });

        tlManaged.to("#container-2", 6, {
                y: -35,
                x: -20,
                yoyo: true,
                ease: Power1.easeInOut,
                repeat: -1
            }, 2
        );

        tlManaged.to("#hand", 2, {
            rotation: -20,
            yoyo: true,
            ease: Power1.easeOut,
            transformOrigin: '0% 100%',
            repeat: -1
        }, 0);

        // tlManaged.to("#kopf-2, #helm",2,{
        //   rotation:-5,
        //   yoyo:true,
        //   ease:Power1.easeInOut,
        //   transformOrigin: '70% 100%',
        //   repeat:-1},0);

        tlManaged.to("#cloud,#cloud-2", 6, {
                x: -20,
                yoyo: true,
                ease: Power1.easeInOut,
                repeat: -1
            }, 2
        );
    }

    // Angebot Unmanaged Animation GSAP
    if ($('svg#angebot_unmanaged_image').length > 0) {
        var tlUnmanaged = new TimelineMax({
            repeat: -1,
            yoyo: true
        });

        tlUnmanaged.add("labelStart");

        tlUnmanaged.to("#arm", 2, {
            rotation: -20,
            yoyo: true,
            ease: Power1.easeOut,
            transformOrigin: '0% 100%',
            repeat: -1
        }, 0);

        tlUnmanaged.to(".head", 2, {
            rotation: -5,
            yoyo: true,
            ease: Power1.easeInOut,
            transformOrigin: '70% 100%',
            repeat: -1
        }, 0);

        tlUnmanaged.to(".cls-41", 1, {
            rotation: -20,
            yoyo: true,
            ease: Power1.easeOut,
            transformOrigin: '0% 100%',
            repeat: -1
        }, 0);

        tlUnmanaged.to("#container-3", 4, {
                y: -35,
                x: -20,
                yoyo: true,
                ease: Power1.easeInOut,
                repeat: -1
            }, 2
        );

        tlUnmanaged.to("#cloud-2,#cloud-3", 4, {
                x: -20,
                yoyo: true,
                ease: Power1.easeInOut,
                repeat: -1
            }, 2
        );

    }

// Beer Button

    $('#beer-button').click((function () {
        $('div#thedialog').dialog('open');
    })

    $('div.thedialog').dialog({autoOpen: false})

})
(window);
