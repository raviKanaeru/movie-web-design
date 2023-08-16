// tombol burger
var navMenu = document.getElementById('menu-nav');
var iconHamburger = document.getElementById('icon');

iconHamburger.addEventListener('click', function() {
  navMenu.classList.toggle('nav-menu-active');
});

// klik diluar hamburgernya
window.addEventListener('click', function(e) {
  if (e.target != iconHamburger && e.target != navMenu) {
      navMenu.classList.remove('nav-menu-active');
  }
})

// navbar fixed
window.onscroll = function() {
  var header = document.querySelector('header');
  var fixedNav = header.offsetTop;
  
  if(window.pageYOffset > fixedNav) {
      header.classList.add('header-active');
  } else {
      header.classList.remove('header-active');
  }
}