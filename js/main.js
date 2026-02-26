/* ==========================================================================
   Compagnie Le Rocher des Doms — JavaScript
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile nav toggle ---
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== hamburger && !hamburger.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  // --- Simple slider ---
  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.slider-dots button');
  if (slides.length > 1) {
    var current = 0;
    function showSlide(n) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { showSlide(i); });
    });
    setInterval(function () { showSlide(current + 1); }, 5000);

    // --- Swipe support for slider ---
    var slider = document.querySelector('.danni-slider');
    if (slider) {
      var touchStartX = 0;
      var touchEndX = 0;
      slider.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      slider.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            showSlide(current + 1); // swipe left → next
          } else {
            showSlide(current - 1); // swipe right → prev
          }
        }
      }, { passive: true });
    }
  }

});
