  // When any nav link is clicked, collapse the navbar
  document.querySelectorAll('.nav_a').forEach(item => {
    item.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      
      if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // this will toggle (hide) the menu
      }
    });
  });



//   active nave 

const navLinks = document.querySelectorAll('.nav_a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active')); // Remove from all
    this.classList.add('active'); // Add to clicked

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Collapse menu
    }
  });
});
