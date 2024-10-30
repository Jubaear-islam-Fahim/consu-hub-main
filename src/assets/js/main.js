(function ($) {
  'use strict'

  /* ========================================
      Header sticky
  ======================================== */
  if ($('').length) {
    $(window).on('scroll', function () {
      var wScroll = $(this).scrollTop();
      if (wScroll > 1) {
        $('.top-nav').addClass('topnav');
      } else {
        $('.top-nav').removeClass('topnav');
      };
    });
  }

  /* ========================================
        text roller
    ======================================== */
  if ($('.text-slider').length) {
    document.addEventListener("DOMContentLoaded", function () {
      var element = document.getElementById("text-roller");
      var text_roller = new TextRoller(element);
      text_roller.start();
    });
  }

  /*
   ========================================
   Counter
   ========================================
   */
  if ($('counter')) {
    $('.counter').countUp({
      'time': 3000,
      'delay': 10
    });
  }

  /* ========================================
        project slider
    ======================================== */
  if ($('.team-slide').length) {
    $('.team-slide').owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        },
        1199: {
          items: 4,
          autoplay: false,
        }
      }
    })
  }

  /* ========================================
        project slider
    ======================================== */
  if ($('.project-slide').length) {
    $('.project-slide').owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })
  }

  /* ========================================
      feedback slide
  ======================================== */
  if ($('.feedback-slide').length) {
    $('.feedback-slide').owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2.2
        }
      }
    });
    // Custom navigation buttons
    var feedbackSlider = $('.feedback-slide');

    $('.next-button').click(function () {
      feedbackSlider.trigger('next.owl.carousel');
    });

    $('.prev-button').click(function () {
      feedbackSlider.trigger('prev.owl.carousel');
    });
  }

  /* ========================================
        scroll top
  ======================================== */
  if ($('.scroll-top').length) {
    var btn = $('.scroll-top');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });

  }

  /* ========================================
        preloader
  ======================================== */
  if ($('.preloader').length) {
    $(window).on('load', function () {
      $('.preloader').fadeOut();
    });
  }

  /* ========================================
        text roller
  ======================================== */
  if ($('.logo__circle__text').length) {
    const text = document.querySelector(".logo__circle__text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 11.7}deg)">${char}</span>`
      )
      .join("");
  }

  /* ========================================
        text roller
  ======================================== */
  // if ($('.').length) { }



})(jQuery);
