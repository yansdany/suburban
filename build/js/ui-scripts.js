$(document).ready(function() {
  $('.opened-datepick').datepick({
      changeMonth: false,
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>',
      showOtherMonths: true,
      selectOtherMonths: true,
      dayNamesMin: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
      startDate: '0d',
      dateFormat: 'MM d, yyyy',
      minDate: 0,
      useMouseWheel: false,
      onSelect: function(dates) {
        $(this).closest('.consultant').find('.selected-date').show();
        $(this).closest('.consultant').find('.selected-date b').text(
          $.datepick.formatDate('MM d, yyyy', $('.opened-datepick').datepick('getDate')[0])
        );
        $('.available-times').addClass('active');
        $('.step.time-select').addClass('current');
      }
  });

  function bookMenuShow() {
    $('.book-btn').click(function() {
      var attr = $(this).attr('data-consultant-toggler');
      var target = $('[data-consultant-target=' + attr + ']');
      $(this).closest('.consultant').addClass('booking');
      target.addClass('active');

      $('html, body').animate({
        scrollTop: target.offset().top
      }, 400);
    });
  }

  bookMenuShow();

  function selectTime() {
    $('.btn.time-select').click(function() {
      $('.btn.time-select').find('.fa').remove();
      $(this).append('<i class="fa fa-check"></i>');
      $('.book-btn').removeClass('disabled');
    });
  }

  selectTime();

  function revealModal() {
    $('[data-modal-toggler]').click(function() {
      var attr = $(this).attr('data-modal-toggler');
      var target = $('[data-modal-target=' + attr + ']');

      $('.modal').addClass('active');
      target.addClass('active');
    });

    $('[data-modal-close]').click(function() {
      $('.modal').removeClass('active');
      $('.modal-inner').removeClass('active');
    });
  }

  revealModal();
});
