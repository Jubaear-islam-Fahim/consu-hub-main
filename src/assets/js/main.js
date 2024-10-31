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
      feedback slide
  ======================================== */
  if ($('.home-tow-feedback-slide').length) {
    $('.home-tow-feedback-slide').owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
    // Custom navigation buttons
    var feedbackSlider = $('.home-tow-feedback-slide');

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
    logo text roller
  ======================================== */
  if ($('.logo__circle__text').length) {
    document.querySelectorAll('.logo__circle__text').forEach((circleText) => {
      const textElement = circleText.querySelector("p");
      if (textElement) {
        textElement.innerHTML = textElement.innerText
          .split("")
          .map((char, i) => `<span style="transform:rotate(${i * 11.7}deg)">${char}</span>`)
          .join("");
      }
    });
  }

  $(document).ready(function () {
    $('.progress-container').each(function () {
      const $container = $(this);
      const canvas = $container.find('.progress-canvas')[0];
      const ctx = canvas.getContext('2d');
      const radius = 90; // Radius of the circle
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const total = $container.data(
        'percentage'); // Get target percentage from data attribute
      let current = 0; // Current progress

      function drawProgressBar(percent) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Draw background circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#E3EDFF';
        ctx.fill();

        // Draw progress arc
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, (2 * Math.PI * percent / 100) - Math
          .PI / 2);
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#266FF2';
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw percentage text
        ctx.fillStyle = '#000F5C'; // Text color
        ctx.font = 'bold 35px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(Math.round(percent) + '%', centerX, centerY);
      }

      function animateProgress() {
        if (current <= total) {
          drawProgressBar(current);
          current++;
          requestAnimationFrame(animateProgress);
        }
      }

      animateProgress();
    });
  });


  /* ========================================
        text roller
  ======================================== */
  // if ($('.').length) { }



})(jQuery);
