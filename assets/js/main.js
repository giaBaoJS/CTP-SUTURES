$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {
    $('#return-to-top').fadeIn(300);
  } else {
    $('#return-to-top').fadeOut(300);
  }
});
$('#return-to-top').click(function () {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    500
  );
});
//Scroll header 
const header = $('.header');
const headerHeight = header.height();
const headerOffsetTop = header.offset().top;
let headerFixedHeight;
var danhmuc = $('.danhmuc__menu');
headerFixedHeight = $('.header__menu').outerHeight();
if (scrollY >= headerOffsetTop + headerHeight) {
  header.addClass('header-fixed');
  header.next().css('margin-top', headerFixedHeight);
} else {
  header.removeClass('header-fixed');
  header.next().css('margin-top', 0);
}
$(window).on('scroll', function () {
  if (scrollY >= headerOffsetTop + headerHeight) {
    header.addClass('header-fixed');
    header.next().css('margin-top', headerFixedHeight);
    danhmuc.removeClass('is-home');
    danhmuc.removeClass('active');
  } else {
    header.removeClass('header-fixed');
    header.next().css('margin-top',0);
    if (danhmuc.hasClass('homepage') == true) {
      danhmuc.addClass('is-home');
    }
    // $(document).ready(function () {
    //   var checkWidth = $(window).width();
    //   if (checkWidth < 1200) {
    //     $('.danhmuc__menu').removeClass('is-home');
    //   }
    // });
  }
});

$('.is-slider').each(function () {
  let nextButton = $(this).find('.swiper-button-next')[0];
  let prevButton = $(this).find('.swiper-button-prev')[0];
  let pagination = $(this).find('.swiper-pagination')[0];
  let container = $(this).find('.swiper-container')[0];
  var swiperslider = new Swiper(container, {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    speed: 1000,
    slidesPerColumn: 1,
    observer: true,
      // autoplay: {
      //   delay: 2000,
      // },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerColumn: 2,
        slidesPerView: 3,
      },
      1200: {
        slidesPerColumn: 2,
        slidesPerView: 6,
      },
    },
  });
});

//Swiper dich vu

var service = new Swiper('.swiper-service', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 'auto',
    },
  },
});
//swiper partner
var partners = new Swiper('.slide-partners', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 60,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

//swiper list category
var partners = new Swiper('.slide-category', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 1000,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 14,
    },
  },
});

//Swiper items detail
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 5,
  slidesPerView: 2,
  loop: true,
  speed: 1000,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },

  },
});
var galleryTop = new Swiper('.gallery-top', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  thumbs: {
    swiper: galleryThumbs,
  },
});

$('.btn-qty').click(function () {
  $button = $(this);
  var oldValue = $button.parent().find('input').val();
  var oldMoney = $('.money').val();
  if ($button.text() == '+') {
    var newVal = parseFloat(oldValue) + 1;
    var newMoney = parseFloat(oldMoney) * newVal;
    var valute = newVal.toString();
    $('.soluong').val(valute);
    // $('.money').val(newMoney);
  } else {
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      var oneMoney = parseFloat(oldMoney) / oldValue;
      var newMoney = parseFloat(oldMoney) - oneMoney;
      var valute = newVal.toString();
      $('.soluong').val(valute);
      // $('.money').val(newMoney);
    } else {
      newVal = 0;
    }
  }
});

//Menu mobile
$('.main-menu-btn').on('click', function() {
  $(this).addClass('active');
  $('.main-menu').addClass('active');
});

$('.main-menu-overlay').on('click', function() {
  $('.main-menu-btn').removeClass('active');
  $('.main-menu').removeClass('active');
});
$('.main-menu-nav  .dropdown').each(function () {
  const dropdown = $(this);
  const arrows = $('<i> </i>');
  arrows.addClass('fa fa-angle-down');
  dropdown.find('a').eq(0).append(arrows);
  const subMenu = dropdown.children('.submenu');
  arrows.on('click', function (e) {
    e.preventDefault();
    dropdown.toggleClass('--show');
    $(this).parent().next('ul').stop().slideToggle();
    $(this).toggleClass('--active');
  });
});
$('.danhmuc__menu  .dropdown').each(function () {
  const dropdown = $(this);
  const arrows = $('<i> </i>');
  arrows.addClass('fa fa-angle-down');
  dropdown.find('a').eq(0).append(arrows);
  const subMenu = dropdown.children('.submenu');
  arrows.on('click', function (e) {
    e.preventDefault();
    dropdown.toggleClass('--show');
    $(this).parent().next('ul').stop().slideToggle();
    $(this).toggleClass('--active');
  });
});

//Tab list Gallery
$('.list-cato .tab').click(function (e) {
  $('.list-cato .tab').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.tablist').removeClass('active');
  $('.' + id).addClass('active');
});

//Open search mobile
$('.icon__mobile').click(function () {
  $('.form-group').toggleClass('active');
});

$('.wrap').click(function () {
  $('.danhmuc__menu').toggleClass('active');
});
$('.icon-x').click(function () {
  console.log('ok');
  $('.danhmuc__menu').removeClass('active');
});
