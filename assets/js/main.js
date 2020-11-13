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
  } else {
    header.removeClass('header-fixed');
    header.next().css('margin-top', 0);
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

//Menu mobile
$('.main-menu-btn').on('click', function () {
  $(this).addClass('active');
  $('.main-menu').addClass('active');
});

$('.main-menu-overlay').on('click', function () {
  $('.main-menu-btn').removeClass('active');
  $('.main-menu').removeClass('active');
});

//Add arrow for submenu
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

//Tab list Product in Home
$('.tab-list .tabs').click(function (e) {
  $('.tab-list .tabs').removeClass('active');
  $(this).addClass('active');
  let id = $(this).attr('data-tab');
  $('.tab-contents .item').removeClass('active');
  $('.' + id).addClass('active');
});
//End tab list