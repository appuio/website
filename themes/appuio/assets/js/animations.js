document.addEventListener('DOMContentLoaded', () => {
  // Home Animation GSAP

  var triggerOffset = 0;
  var duration = 10;

  var requestId = null;

  var tl = new TimelineMax({
    repeat: -1,
    yoyo: true,
  });

  tl.staggerTo(
    ".ad_ons",
    duration,
    {
      rotation: -2,
      x: -3,
      y: -4,
      yoyo: true,
      transformOrigin: "0% 100%",
      repeat: -1,
      ease: Power1.easeInOut,
    },
    0
  );
  tl.to(
    "#cloud-3",
    duration * 8,
    {
      x: 340,
      y: 0,
    },
    0
  );
  tl.to(
    ".ad_ons",
    duration,
    {
      x: -80,
      y: -40,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    },
    0
  );
  tl.to(
    "#kran_container, #kran_haken",
    duration / 2,
    {
      y: -18,
      x: +20,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
    },
    0
  );
  tl.to(
    "#cloud-2",
    duration * 4,
    {
      x: -140,
      y: 0,
      yoyo: true,
      repeat: -1
    },
    0
  );




  // Angebot Cloud Animation GSAP

  if (document.querySelectorAll("#angebot_cloud_image").length > 0) {
    var tlPublic = new TimelineMax({
      repeat: -1,
      yoyo: true,
    });

    tlPublic.to(
      "#containers, #clouds_mitte",
      25,
      {
        x: -50,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      2
    );

    tlPublic.to(
      "#cloud_links",
      9,
      {
        x: 70,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      2
    );

    tlPublic.to(
      "#clouds_rechts-2",
      15,
      {
        x: -150,
        y: -150,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      2
    );

    // tlPublic.to(
    //   "#container-2",
    //   3,
    //   {
    //     y: -10,
    //     x: -5,
    //     yoyo: true,
    //     ease: Power1.easeInOut,
    //     repeat: -1,
    //   },
    //   2
    // );

    // tlPublic.to(
    //   "#container",
    //   3,
    //   {
    //     y: -5,
    //     yoyo: true,
    //     ease: Power1.easeInOut,
    //     repeat: -1,
    //   },
    //   4
    // );

    // tlPublic.to(
    //   "#container-2",
    //   3,
    //   {
    //     y: -10,
    //     yoyo: true,
    //     ease: Power1.easeInOut,
    //     repeat: -1,
    //   },
    //   0
    // );

    // tlPublic.to(
    //   "#container-3",
    //   6,
    //   {
    //     y: -10,
    //     x: 5,
    //     yoyo: true,
    //     ease: Power1.easeInOut,
    //     repeat: -1,
    //   },
    //   2
    // );
  }

  // Angebot Managed Animation GSAP
  if (document.querySelectorAll("#angebot_managed_image").length > 0) {
    var tlManaged = new TimelineMax({
      repeat: -1,
      yoyo: true,
    });

    tlManaged.to(
      "#container-2",
      6,
      {
        y: -35,
        x: -20,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      2
    );

    tlManaged.to(
      "#hand",
      2,
      {
        rotation: -20,
        yoyo: true,
        ease: Power1.easeOut,
        transformOrigin: "0% 100%",
        repeat: -1,
      },
      0
    );

    // tlManaged.to("#kopf-2, #helm",2,{
    //   rotation:-5,
    //   yoyo:true,
    //   ease:Power1.easeInOut,
    //   transformOrigin: '70% 100%',
    //   repeat:-1},0);

    tlManaged.to(
      "#cloud,#cloud-2",
      6,
      {
        x: -20,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      2
    );
  }

  // Angebot Unmanaged Animation GSAP
  if (document.querySelectorAll("#angebot_unmanaged_image").length > 0) {
    var tlUnmanaged = new TimelineMax({
      repeat: -1,
      yoyo: true,
    });

    tlUnmanaged.add("labelStart");

    tlUnmanaged.to(
      "#arm",
      2,
      {
        rotation: -20,
        yoyo: true,
        ease: Power1.easeOut,
        transformOrigin: "0% 100%",
        repeat: -1,
      },
      0
    );

    tlUnmanaged.to(
      ".head",
      2,
      {
        rotation: -5,
        yoyo: true,
        ease: Power1.easeInOut,
        transformOrigin: "70% 100%",
        repeat: -1,
      },
      0
    );

    tlUnmanaged.to(
      ".cls-41",
      1,
      {
        rotation: -20,
        yoyo: true,
        ease: Power1.easeOut,
        transformOrigin: "0% 100%",
        repeat: -1,
      },
      0
    );

    tlUnmanaged.to(
      "#container-3",
      4,
      {
        y: -35,
        x: -20,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      2
    );

    tlUnmanaged.to(
      "#cloud-2,#cloud-3",
      4,
      {
        x: -20,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      2
    );
  }

  // OS Techlab Animation GSAP
  if (document.querySelectorAll("#ostechlab_image").length > 0) {
    var tlUnmanaged = new TimelineMax({
      repeat: -1,
      yoyo: true,
    });

    tlUnmanaged.add("labelStart");

    tlUnmanaged.to(
      ".arm-pointer",
      6,
      {
        rotation: -30,
        yoyo: true,
        ease: Power1.easeInOut,
        transformOrigin: "100% 100%",
        repeat: -1,
      },
      0
    );
    tlUnmanaged.to(
      ".flower",
      4,
      {
        rotation: 15,
        yoyo: true,
        ease: Power1.easeInOut,
        transformOrigin: "100% 100%",
        repeat: -1,
      },
      0
    );
    tlUnmanaged.to(
      ".cloud-1, .cloud-2",
      12,
      {
        x: 80,
        yoyo: true,
        ease: Power1.easeInOut,
        transformOrigin: "100% 100%",
        repeat: -1,
      },
      0
    );
    tlUnmanaged.to(
      ".screen-glow",
      2,
      {
        opacity: 0.3,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
        repeatDelay: 3,
      },
      0
    );
  }
  // AMM Techlab Animation GSAP
  if (document.querySelectorAll("#ammtechlab_image").length > 0) {
    var tlUnmanaged = new TimelineMax({
      repeat: -1,
      yoyo: true,
    });

    tlUnmanaged.add("labelStart");
    tlUnmanaged.to(
      ".flower",
      4,
      {
        rotation: 15,
        yoyo: true,
        ease: Power1.easeInOut,
        transformOrigin: "100% 100%",
        repeat: -1,
      },
      0
    );
    tlUnmanaged.to(
      ".clouds",
      12,
      {
        x: 80,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      0
    );
    tlUnmanaged.to(
      ".screen-glow",
      2,
      {
        opacity: 0.3,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
        repeatDelay: 3,
      },
      0
    );
  }

  // ACEND Techlab Animation GSAP
  if (document.querySelectorAll("#acendtechlab_image").length > 0) {
    var tlAcend = new TimelineMax({
      repeat: -1,
      yoyo: true,
    });

    tlAcend.add("labelStart");
    tlAcend.to(
      ".flower",
      4,
      {
        rotation: 15,
        yoyo: true,
        ease: Power1.easeInOut,
        transformOrigin: "100% 100%",
        repeat: -1,
      },
      0
    );
    tlAcend.to(
      ".clouds",
      12,
      {
        x: 80,
        yoyo: true,
        ease: Power1.easeInOut,
        repeat: -1,
      },
      0
    );

  }

});
