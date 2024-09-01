$(document).ready(function() {
    $('#downloadCV').on('click', function(event) {
      event.preventDefault(); 
      var resumePath = 'Documents/SUBASH_RESUME.pdf';
      var link = $('<a></a>').attr('href', resumePath).attr('download', 'Subash.S.pdf');
      $('body').append(link);
      link[0].click();
      link.remove();
    });
    animateProgressBars();
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateProgressBars() {
  $('.progress-bar').each(function() {
      var $this = $(this);
      if (isElementInViewport(this) && !$this.hasClass('animated')) {
          var barWidth = $this.attr('aria-valuenow') + '%';
          $this.animate({
              width: barWidth
          }, 1000);
          $this.addClass('animated'); // Ensure it doesn't animate again
      }
  });
}

// Check on scroll
$(window).on('scroll', function() {
  animateProgressBars();
});

$(".nav-link[href='#skills-section']").click(function() {
  animateProgressBars();
});