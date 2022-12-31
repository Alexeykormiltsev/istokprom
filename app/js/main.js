

$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__box').toggleClass('menu__box--active');
  });

  const swiper = new Swiper('.header__slider-inner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 7000,
    },
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },

  });
  const slider = new Swiper('.product__slider, .example__slider', {

    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
      shadow: false,
    },

    pagination: true,
    navigation: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },


  });

  const customers = new Swiper('.customers__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
      shadow: false,
    },
    navigation: true,

    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });
  const comments = new Swiper('.comments__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
      shadow: false,
    },
    pagination: true,
    navigation: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });

});

