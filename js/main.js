// ========================================================================= //
//  //LOADER
// ========================================================================= //


// $(document).ready(function () {
//   setTimeout(function () {
//     $('.loader').fadeOut(1000);
//     console.log("document loaded!");
//   }, 0);
// });

function hideLoader() {
  $('.loader').hide();
}

setTimeout(function () {
  $(window).ready(hideLoader);
  console.log("document loaded!");
}, 2000);


// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);

jQuery_3_5_1(document).ready(function () {
  jQuery_3_5_1("#flip").click(function () {

    if (jQuery_3_5_1("#contactPanel").is(':visible')) {
      jQuery_3_5_1("#contactPanel").fadeToggle("slow");
      jQuery_3_5_1("#aboutPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#aboutPanel").slideDown("slow");
    }

    if (jQuery_3_5_1("#buyPanel").is(':visible')) {
      jQuery_3_5_1("#buyPanel").fadeToggle("slow");
      jQuery_3_5_1("#aboutPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#aboutPanel").slideDown("slow");
    }

    if (jQuery_3_5_1(" #bookPanel").is(':visible')) {
      jQuery_3_5_1("#bookPanel").fadeToggle("slow");
      jQuery_3_5_1("#aboutPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#aboutPanel").slideDown("slow");
    }

  });
});


jQuery_3_5_1(document).ready(function () {
  jQuery_3_5_1("#contactFlip").click(function () {

    if (jQuery_3_5_1("#aboutPanel").is(':visible')) {
      jQuery_3_5_1("#aboutPanel").fadeToggle("slow");
      jQuery_3_5_1("#contactPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#contactPanel").slideDown("slow");
    }

    if (jQuery_3_5_1("#buyPanel").is(':visible')) {
      jQuery_3_5_1("#buyPanel").fadeToggle("slow");
      jQuery_3_5_1("#contactPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#contactPanel").slideDown("slow");
    }

    if (jQuery_3_5_1(" #bookPanel").is(':visible')) {
      jQuery_3_5_1("#bookPanel").fadeToggle("slow");
      jQuery_3_5_1("#contactPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#contactPanel").slideDown("slow");
    }

  });
});

jQuery_3_5_1(document).ready(function () {
  jQuery_3_5_1("#buyFlip").click(function () {

    if (jQuery_3_5_1("#aboutPanel").is(':visible')) {
      jQuery_3_5_1("#aboutPanel").fadeToggle("slow");
      jQuery_3_5_1("#buyPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#buyPanel").slideDown("slow");
    }

    if (jQuery_3_5_1("#contactPanel").is(':visible')) {
      jQuery_3_5_1("#contactPanel").fadeToggle("slow");
      jQuery_3_5_1("#buyPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#buyPanel").slideDown("slow");
    }

    if (jQuery_3_5_1(" #bookPanel").is(':visible')) {
      jQuery_3_5_1("#bookPanel").fadeToggle("slow");
      jQuery_3_5_1("#buyPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#buyPanel").slideDown("slow");
    }

  });
});

jQuery_3_5_1(document).ready(function () {
  jQuery_3_5_1("#bookFlip").click(function () {

    if (jQuery_3_5_1("#aboutPanel").is(':visible')) {
      jQuery_3_5_1("#aboutPanel").fadeToggle("slow");
      jQuery_3_5_1("#bookPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#bookPanel").slideDown("slow");
    }

    if (jQuery_3_5_1("#contactPanel").is(':visible')) {
      jQuery_3_5_1("#contactPanel").fadeToggle("slow");
      jQuery_3_5_1("#bookPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#bookPanel").slideDown("slow");
    }

    if (jQuery_3_5_1(" #buyPanel").is(':visible')) {
      jQuery_3_5_1("#buyPanel").fadeToggle("slow");
      jQuery_3_5_1("#bookPanel").fadeIn("slow");
    } else {
      jQuery_3_5_1("#bookPanel").slideDown("slow");
    }

  });
});




$(".main-nav a").click(function () {
  $(".main-nav a").css("color", "#000000");
  $(this).css("color", "#e24b20");
});
