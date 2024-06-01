// script.js
document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('header');
  var lastScrollTop = 0;

  window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          // Deslizando hacia abajo
          navbar.classList.add('header-desplegable');
      } else {
          // Deslizando hacia arriba
          navbar.classList.remove('header-desplegable');
      }
      lastScrollTop = scrollTop;
  });
});

