$(document).ready(function() {
    // Function on the position of the second section
    function secondSectionPosition() {
      return $('.about__part').offset().top;
    }
    $(window).scroll(function() {
      if ($(this).scrollTop() > secondSectionPosition()) {
        $('.contact-button').fadeIn();
      } else {
        $('.contact-button').fadeOut();
        $('.contact-form').fadeOut();
      }
    });
    $('.contact__Btn').click(function() {
      $('.contact-form').fadeIn();
      $('.contact__Btn').fadeOut();
    });
    $('.cross').click(function() {
      $('.contact-form').fadeOut();
      $('.contact__Btn').fadeIn();
    });
    $('#contactForm').submit(function(e) {
      e.preventDefault();
      // Handled form submission here
      // Reset the form after submission
      $('#contactForm')[0].reset();
      $('.contact-form').fadeOut();
    });
  });

