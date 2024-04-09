$('.hamburger').on('click', function() {
  $('.hamburger__element').toggleClass('hamburger__element--active');
  $('.main-navigation').toggleClass('main-navigation--active');
});

$('.main-navigation__link').on('click', function() {
  $('.hamburger__element').toggleClass('hamburger__element--active');
  $('.main-navigation').toggleClass('main-navigation--active');
});