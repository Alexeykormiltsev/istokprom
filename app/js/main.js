

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

  $('#services-link').on('click', function () {
    $('#services-link').toggleClass('services-link--active');
    $('#services').toggleClass('services--active');
    $('#services').removeClass('services');
  });


  $('.about-link').on('click', function () {
    $('.about-link').toggleClass('about-link--active');
  });
  $('.myBtn').on('click', function () {
    $('body').toggleClass('hidden');
  });
  $('.close,.modal').on('click', function () {
    $('body').removeClass('hidden');
  });

  $('.timeline__year-one').on('click', function () {
    $('.timeline__year-one').toggleClass('year');
    $('.timeline__year-three').removeClass('three-open');
    $('.timeline__year-four').removeClass('four-open');
    $('.timeline__year-two').removeClass('two-open'); 
    $('#text1').toggleClass('text-open');
    $('#text1').removeClass('close');
    $('#text2').removeClass('text-open');
    $('#text3').removeClass('text-open');
    $('#text4').removeClass('text-open');
    
    
    $('#text4').toggleClass('close');
    $('#text3').toggleClass('close');
    $('#text2').toggleClass('close');
  });

  $('.timeline__year-two').on('click', function () {
    $('.timeline__year-two').toggleClass('two-open');
    $('.timeline__year-three').removeClass('three-open');
    $('.timeline__year-four').removeClass('four-open');
    $('.timeline__year-one').removeClass('year');
    $('#text2').toggleClass('text-open');
    $('#text2').removeClass('close');
    $('#text1').removeClass('text-open');
    $('#text3').removeClass('text-open');
    $('#text4').removeClass('text-open');

    // $('#text4').toggleClass('close');
    // $('#text3').toggleClass('close');
    $('#text1').toggleClass('close');
  });

  $('.timeline__year-three').on('click', function () {
    $('.timeline__year-three').toggleClass('three-open');
    $('.timeline__year-two').removeClass('two-open');
    $('.timeline__year-four').removeClass('four-open');
    $('.timeline__year-one').removeClass('year');
    $('#text3').toggleClass('text-open');
    $('#text3').removeClass('close');
    $('#text2').removeClass('text-open');
    $('#text1').removeClass('text-open');
    $('#text4').removeClass('text-open');

    $('#text2').toggleClass('close');
    // $('#text4').toggleClass('close');
    // $('#text1').toggleClass('close');
  });

  $('.timeline__year-four').on('click', function () {
    $('.timeline__year-four').toggleClass('four-open');
    $('.timeline__year-three').removeClass('three-open');
    $('.timeline__year-two').removeClass('two-open');
    $('.timeline__year-one').removeClass('year');
    $('#text4').toggleClass('text-open');
    $('#text4').removeClass('close');
    $('#text2').removeClass('text-open');
    $('#text3').removeClass('text-open');
    $('#text1').removeClass('text-open');

    // $('#text2').toggleClass('close');
    $('#text3').toggleClass('close');
    // $('#text1').toggleClass('close');
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
  const slider = new Swiper('.product__slider, .example__slider, .machine__slider', {

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

var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("myBtn");

var span = document.getElementsByClassName("close");

function buttonClick(event) {
  var id = this.getAttribute('data-modal');
   var modal = document.getElementById(id);
   modal.style.display = 'block';
}

for (var i = 0; i < btn.length; i++) {
   btn[i].onclick = buttonClick;
}

function spanClick() {
  var id = this.getAttribute('data-modal');
  var modal = document.getElementById(id);
  modal.style.display = 'none';
}

for (var i = 0; i < span.length; i++) {
  span[i].onclick = spanClick;
}

window.onclick = function(event) {
  var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
  if (isModal) {
    event.target.style.display = "none";
  }
}




