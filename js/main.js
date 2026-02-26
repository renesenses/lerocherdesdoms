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
  }

  // --- Contact form (static demo) ---
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.createElement('p');
      msg.style.color = '#d50';
      msg.style.fontWeight = 'bold';
      msg.style.marginTop = '1em';
      msg.textContent = 'Merci pour votre message ! (Formulaire de démonstration)';
      form.parentNode.insertBefore(msg, form.nextSibling);
      form.reset();
    });
  }
});
