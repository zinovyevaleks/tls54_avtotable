// $(function() {
//   $('#modSelect').change(function() {
//     $('div.gas').toggleClass("hidden");
//     $('div.diesel').toggleClass("hidden");
//   });
// });


  
// select open/close

$('.select').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();

  var notTargetedSelect = $('.select').not(e.target);

  if (notTargetedSelect.hasClass('select_state_open')) {
    notTargetedSelect.removeClass('select_state_open');
  }
  else {
    $(this).has(e.target).addClass('select_state_open');
  }

  $(document).one('click', function closeMenu(e) {
    if ($('.select__list').has(e.target).length === 0) {
      $('.select').removeClass('select_state_open');
    } else {
      $(document).one('click', closeMenu);
    }
  });

});

// setting dropdown selected value

$('.select__link').on('click', function () {
  var value = $(this).html();
  $(this).parent().parent().parent('.select').children('.select__text')
    .removeClass('select__text__gray').html(value);
});

// select type tab

$('.select-type .select__link').on('click', function () {
  $('.f-table__cell').removeClass('f-table__cell__state_active');
  var position = $(this).attr('data-type');
  var tableCell = $(".f-table__right > .f-table__cell:nth-child(" + position + ")");
  $(tableCell).addClass('f-table__cell__state_active');

  // column scroll

  if ($(window).width() < 768) {
    $('.f-table').animate({scrollLeft: 60 * (position - 1)}, 1000);
  }
});

// select close for 'esc' press

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    $('.select').removeClass('select_state_open');
  }
});

// select car table tab

$(document).ready(function () {


  $('.tabs-menu a').click(function (e) {
    e.preventDefault();
    var tab = $(this).attr('href');
    $('.tab-content').not(tab).fadeOut(150);
    $(tab).fadeIn(300);
  });


});
