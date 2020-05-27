let menuState = false;

$('.menu_btn').click(function () {
  menuState = !menuState;
  if (menuState) {
    $('.map_wrapper').animate({right: '0px'}, 500)
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').animate({right: '-3000px'}, 500)
  }
})

$('.substrate').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').animate({right: '-3000px'}, 500)
  }
})

$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').animate({right: '-3000px'}, 500)
  }
})