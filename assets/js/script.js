$(function () {
  'use strict';
  

  //>>>>>> Menu fixed
  var navoff = $('.main-manu').offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navoff) {
      $('.main-manu').addClass('menu-fix');
    } else {
      $('.main-manu').removeClass('menu-fix');
    }
  });
  // >>>>Cursor
  var cursor = document.getElementById("cursor");

  document.onmousemove = function (e) {
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = "block";
  }
  // >>>>banner slider
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    mobileFirst: true
  });
  // service slider
  $('.service').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 2000,
    centerPadding: 0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // AOS animation effect
    AOS.init({once: true});

  // >>>>>> active section menu
  
  $('.btop').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 100);
  });

  //>>>>>> back-to-top-btn script

  const backToTopButton = document.querySelector("#back-to-top-btn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
      if (!backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
      }
    } else { // Hide backToTopButton
      if (backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnEntrance");
        backToTopButton.classList.add("btnExit");
        setTimeout(function () {
          backToTopButton.style.display = "none";
        }, 250);
      }
    }
  }

  backToTopButton.addEventListener("click", smoothScrollBackToTop);

  // function backToTop() {
  //   window.scrollTo(0, 0);
  // }

  function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };




  // >>>>preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }




});