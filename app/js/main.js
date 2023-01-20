

$(function () {

  $('.menu__btn').on('click', function () {
    $('.header__menu-inner').toggleClass('header__menu-inner--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('body').toggleClass('hidden');
  });
  $('#linkone').on('click', function () {
    $('#linkone').toggleClass('sub-menu__link--icon-active'); 
    $('.submenu__list').toggleClass('submenu__list--active');  
  });
  $('#linktwo').on('click', function () {
    $('#linktwo').toggleClass('sub-menu__link--icon-active'); 
    $('.submenu__listtwo').toggleClass('submenu__list--active');  
  });


  $('.about-link').on('click', function () {
    $('.about-link').toggleClass('about-link--active');
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

